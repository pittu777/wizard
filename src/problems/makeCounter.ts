

export default function makeCounter(initialValue = 0){
    let count = initialValue;

    return {
        increment:()=>{
            count++
            return count;
        },
        decrement:()=>{
            count--
            return count;
        },
        get:()=>{
            return count;
        },
        reset:()=>{
            count = initialValue;
        }
    }
    
}

const res = makeCounter(0);

res.increment();
res.get();