function frankenSplice(arr1, arr2, n) {
  let myArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    myArray.splice(n, 0, arr1[i]);
    n++;
  }
  return myArray;
}