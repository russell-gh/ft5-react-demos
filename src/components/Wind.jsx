// import React, { Component } from "react";

// class Wind extends Component {
//   render() {
//     const { speed, gust } = this.props;

//     return (
//       <>
//         <p>Speed: {speed}</p>
//         <p>Gust: {gust}</p>
//       </>
//     );
//   }
// }

// export default Wind;

import React from "react";

function Wind({ speed, gust }) {
  return (
    <>
      <p>Speed: {speed}</p>
      <p>Gust: {gust}</p>
    </>
  );
}

export default Wind;
