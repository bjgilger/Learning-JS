// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");