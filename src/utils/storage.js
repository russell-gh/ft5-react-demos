export function store(key, value) {
  if (typeof value === "string" || typeof value === "number") {
    localStorage.setItem(key, value);
    return;
  }

  localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
  return JSON.parse(localStorage.getItem(key));
}
