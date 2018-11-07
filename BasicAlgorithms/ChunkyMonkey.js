function chunkArrayInGroups(arr, size) {
  // Break it up.
  let chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, size));
  }
  return chunk;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);