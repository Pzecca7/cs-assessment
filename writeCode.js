let array = [28, 43, -12, 30, 4, 0, -4]


const addToZero = arr => {                         //O(1)
    for(let i = 0; i < arr.length; i++){           //O(n) nested for loops
        for(let j = i + 1; j < arr.length; j++){   //O(n) nested for loops
        if(arr[i] + arr[j] === 0){                 //O(1)
            return true                            //O(1)
            } 
        }

    }                                             

    return false                                   //O(1)
}




// runtime complexity = O(n^2)
// spacetime complexity = O(1)

console.log(addToZero(array))


function hasUniqueChar(str) {
    const mySet = new Set(str) //O(n) set 
    return new Set(str).size === str.length; //O(1)
}

//runtime complexity = O(n)
// spacetime complexit = O(1)

console.log(hasUniqueChar('Monday'))
console.log(hasUniqueChar('Moonday'))
console.log(hasUniqueChar('Bob'))
console.log(hasUniqueChar('Saturday'))
console.log(hasUniqueChar('Tuesday'))

const isPangram = str => {
    let strArr = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

    for(let i = 0; i < alphabet.length; i++){
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true
}

//runtime complexity = O(n)
//spacetime complexity = O(1)

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

const findLongestWord = arr => {
    let longestWord = 0                       //O(1)

    for(let i = 0; i < arr.length; i++){      //O(n) for loop
        if (arr[i].length > longestWord){     //O(1)
            longestWord = arr[i].length       //O(1)
        }
    }
    return longestWord                        //O(1)
}

// runtime conmplexity = O(n)
// spacetime complexity = O(1)

console.log(findLongestWord(['hi', 'hello']))




