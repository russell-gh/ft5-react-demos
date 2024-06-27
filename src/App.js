import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters";
import CharactersControls from "./components/CharactersControls";
// import { get, store } from "./utils/storage";
import { useLocalStorage } from "./components/hooks";
import { Routes, Route } from "react-router-dom";
import OneItem from "./components/OneItem";

const App = () => {
  const [simpsons, setSimpsons] = useLocalStorage({ key: "simpsons" });
  const [formData, setFormData] = useState({});
  const [error, setError] = useState();
  const [count, setCount] = useState(50);

  //always the same version of the getSimpsons func
  const getSimpsons = useCallback(async () => {
    try {
      if (!simpsons) {
        const { data } = await axios.get(
          `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
        );
        //fixes api data
        data.forEach((element, index) => {
          element.id = index + 1;
        });
        setSimpsons(data);
      }
    } catch (e) {
      setError(e);
    }
  }, [count, setSimpsons, setError]);

  useEffect(() => {
    getSimpsons();
  }, [count, getSimpsons]);

  // useEffect(() => {
  //   const disk = get("formData");
  //   if (disk) {
  //     setFormData(disk);
  //   }
  // }, []);

  const onLikeToggle = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = _simpsons.findIndex((item) => {
      return item.id === id;
    });
    if (indexOf === -1) {
      console.log("This should almost never occur");
      return;
    }
    _simpsons[indexOf].liked = !_simpsons[indexOf].liked;

    setSimpsons(_simpsons);
  };

  const onDelete = (id) => {
    const _simpsons = [...simpsons];
    const indexOf = _simpsons.findIndex((item) => {
      return item.id === id;
    });
    if (indexOf === -1) {
      console.log("This should almost never occur");
      return;
    }
    _simpsons.splice(indexOf, 1);
    setSimpsons(_simpsons);
  };

  const getTotalLiked = () => {
    const liked = simpsons.filter((item) => {
      return item.liked;
    });

    return <h1>Total liked: {liked.length}</h1>;
  };

  const onFormEvent = (e) => {
    const newState = { ...formData, [e.target.id]: e.target.value };

    setFormData(newState);

    // store("formData", newState);
  };

  const getSimpsonsToDisplay = () => {
    //filter based on search
    let filtered = [...simpsons];
    if (formData.text) {
      filtered = filtered.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(formData.text.toLowerCase());
      });
    }

    //if no resuls, return all results
    filtered = filtered.length ? filtered : simpsons;

    //sort the data
    filtered.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      }
      if (a.character < b.character) {
        return -1;
      }
      return 0;
    });

    if (formData.select === "DESC") {
      filtered.reverse();
    }

    return filtered; //either everything or if search term then filtered
  };

  if (error) {
    return <h1>API down, try later!</h1>;
  }

  if (!simpsons) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Routes>
        <Route path="/:name" element={<OneItem />} />
        <Route
          path="*"
          element={
            <>
              <CharactersControls callback={onFormEvent} formData={formData} />
              {getTotalLiked()}
              <Characters
                characters={getSimpsonsToDisplay()}
                onLikeToggle={onLikeToggle}
                onDelete={onDelete}
              />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;

// class App extends Component {

//   state = {};

//   componentDidMount() {
//     this.getSimpsons();
//   }

//   getSimpsons = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
//       );
//       //fixes api data
//       data.forEach((element, index) => {
//         element.id = index + 1;
//       });
//       this.setState({ simpsons: data });
//     } catch (e) {
//       this.setState({ error: "Api Down" });
//     }
//   };

//   onLikeToggle = (id) => {
//     const simpsons = [...this.state.simpsons];
//     const indexOf = simpsons.findIndex((item) => {
//       return item.id === id;
//     });
//     if (indexOf === -1) {
//       console.log("This should almost never occur");
//       return;
//     }
//     simpsons[indexOf].liked = !simpsons[indexOf].liked;

//     this.setState({ simpsons });
//   };

//   onDelete = (id) => {
//     const simpsons = [...this.state.simpsons];
//     const indexOf = simpsons.findIndex((item) => {
//       return item.id === id;
//     });
//     if (indexOf === -1) {
//       console.log("This should almost never occur");
//       return;
//     }
//     simpsons.splice(indexOf, 1);
//     this.setState({ simpsons });
//   };

//   getTotalLiked = () => {
//     const liked = this.state.simpsons.filter((item) => {
//       return item.liked;
//     });

//     return <h1>Total liked: {liked.length}</h1>;
//   };

//   onFormEvent = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value,
//     });
//   };

//   getSimpsonsToDisplay = () => {
//     //filter based on search
//     let filtered = [...this.state.simpsons];
//     if (this.state.text) {
//       filtered = filtered.filter((item) => {
//         return item.character
//           .toLowerCase()
//           .includes(this.state.text.toLowerCase());
//       });
//     }

//     //if no resuls, return all results
//     filtered = filtered.length ? filtered : this.state.simpsons;

//     //sort the data
//     filtered.sort((a, b) => {
//       if (a.character > b.character) {
//         return 1;
//       }
//       if (a.character < b.character) {
//         return -1;
//       }
//       return 0;
//     });

//     if (this.state.select === "DESC") {
//       filtered.reverse();
//     }

//     return filtered; //either everything or if search term then filtered
//   };

//   render() {
//     console.log(this.state);
//     const { simpsons, error } = this.state;

//     if (error) {
//       return <h1>API down, try later!</h1>;
//     }

//     if (!simpsons) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <>
//         <CharactersControls callback={this.onFormEvent} />
//         {this.getTotalLiked()}
//         <Characters
//           characters={this.getSimpsonsToDisplay()}
//           onLikeToggle={this.onLikeToggle}
//           onDelete={this.onDelete}
//         />
//       </>
//     );
//   }
// }

// export default App;
