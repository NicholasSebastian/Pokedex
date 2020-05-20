// Utility function for getting 3 digit numbers.
export function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

// Utility function for shortening overly long pokemon names.
export function shorten(name) {
  let string = name;
  if (name.includes("-") && name.toLowerCase().includes("mime") === false) {
    string = name.substring(0, name.indexOf("-"));
  }
  return string;
}

// Utility function for capitalizing the first letter of a string.
export function capitalize(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}
