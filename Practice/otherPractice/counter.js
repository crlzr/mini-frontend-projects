function XO(str) {
  let xCounter = 0;
  let oCounter = 0;
  let normalised = str.toLowerCase();
  let arr = normalised.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "x" || arr[i] != "o") {
      continue;
    }
    if (arr[i] === "x") {
      xCounter += 1;
    }
    if (arr[i] === "o") {
      oCounter += 1;
    }
  }
  if (xCounter === oCounter) {
    return true;
  }
  return false;
}

console.log(XO("VIuooPoOXXxYooexXsxooxooxXoKXIXI"));
