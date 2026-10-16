

// import { useRef } from "react";

import { useEffect, useState } from "react";

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


function useBreakPoint(){

    const breakPoints={
        640:"sm",
        768:"md",
        1024:"lg",
        1280:"xl",
    }

    function getBreakPoint(width){
        const thresholds = Object.keys(breakPoints)
        .map(Number)
        .sort((a,b)=> a-b);

        let result = null;

        for(const t of thresholds){
            result = thresholds[t];
        }
        return result;
    }

    const [width, setWidth] = useState(()=>
        typeof window !== "undefined" ? getBreakPoint(window.innerWidth):null
    );

    useEffect(()=>{
        function handleSize(){
            setWidth(getBreakPoint(window.innerHeight));
        }
        window.addEventListener("resize", handleSize);

        return ()=>{
            window.removeEventListener("resize", handleSize);
        }
    },[width]);

    return width;


}