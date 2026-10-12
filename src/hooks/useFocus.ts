

// import { useRef } from "react";

// function useFocus() {
//   // Step 1: Create a ref.

//   const inputRef = useRef(null);

//   const handleFocus=()=>{
//     inputRef.current?.focus();
//   }

//   return{
//     inputRef,
//     handleFocus,
//   }

//   // Step 2: Create a function that focuses the element.

//   // Step 3: Return the ref and the function.
// }



// // usePrevious


// import { useEffect, useRef } from "react";

// function usePrevious(value) {
//   const previousRef = useRef(undefined);
//   const currentRef = useRef(value);

//   useEffect(() => {
//     if (!Object.is(currentRef.current, value)) {
//       previousRef.current = currentRef.current;
//       currentRef.current = value;
//     }
//   }, [value]);

//   return previousRef.current;
// }

// export default usePrevious;













// function countBy(array, iteratee) {
//   const result = {};

//   for (const value of array) {
//     const key = iteratee(value);

//     if (Object.hasOwn(result, key)) {
//       result[key]++;
//     } else {
//       result[key] = 1;
//     }
//   }

//   return result;
// }

// console.log(countBy([6.1, 4.2, 6.3], Math.floor));





// /**
//  * @param {Array} array
//  * @param {Function} iteratee
//  * @returns {Object}
//  */
// export default function groupBy(array, iteratee) {
//   const result = {};

//   for (const value of array) {
//     const key = iteratee(value);
    
//     if(Object.hasOwn(result, key)){
//         result[key].push(value);
//     }else{
//         result[key] = [value];
//     }
//   }


//   return result;
// }

// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));


