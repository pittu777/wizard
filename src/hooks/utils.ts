


function unionBy(...arrays) {
  const result = [];
  const seen = new Set();

  for(let i=0; i<arrays.length; i++){
    let arr = arrays[i];
    for(let j=0; j<arr.length; j++){
        let val = arr[j];
        if(!seen.has(val)){
        seen.add(val);
        result.push(val);
    }
    }
  }
  

  // Loop through each array.
  // Loop through each value.
  // Add a value only if it hasn't been seen.

  return seen;
}