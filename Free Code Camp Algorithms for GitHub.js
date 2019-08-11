Free Code Camp Algorithms
for GitHub
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

// The following are free code camps basic and intermediate algorithms I am working through a second time. They will be placed here only after I have completed them without help and can fully understand and explain them to a five year old ;)


//Here we go






// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.



function largestOfFour(arr) {

    let largestNum = [];
    for (let i = 0; i < arr.length; i++) {
        largestNum.push(Math.max(...arr[i]))
    }


    return largestNum;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
])); //[5,27,39,1001]

//another way (without awesome things like rest operater and Math.max)

function largestOfFour(arr) {
    var largestNum = [];
    for (let i = 0; i < arr.length; i++) {
        var eachMax = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > eachMax) {
                eachMax = arr[i][j];
            }
        }
        largestNum.push(eachMax)
    }
    return largestNum;
}


console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
])); //[5,27,39,1001]

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//Check if a string (first argument, str) ends with the given target string (second argument, target) 
//In other words, is target the ending of str?


function confirmEnding(str, target) {
    let testable = str.substring(str.length - target.length);
    console.log(testable) //so I could see that the substring worked as I wanted it too

    let answer = (testable === target);

    return answer;
}

console.log(confirmEnding("Bastian", "n"));

-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//Repeat a given string str(first argument) for num times (second argument). Return an empty sting if num is not a positive number.


function repeatStringNumTimes(str, num) {
    let newStr = '';
    if (num <= 0) {
        return newStr;
    }
    newStr = [];
    str = str.split('');
    for (let i = 0; i < num; i++) {
        newStr.push(str)
    }
    newStr = newStr.join('');
    return newStr;
}

console.log(repeatStringNumTimes('abc', 3));


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//Check if a value is classified as a boolean primitve. Return true or false


function booWho(bool) {
    return ((typeof bool == 'boolean') ? true : false);
}

console.log(booWho(null));


//easy function to write. I used ternary operator to simplify things, once I realized I needed to check the type, it came about relatively quickly. 


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//You are given two arrays and an index
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//begin inserting elements at index n of the second array
//Return the resulting array. The input arrays should remain the same after the function runs. 

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.splice();
    for (let i = 0; i < arr1.lenth; i++) {
        newArr.splice(n, 0, arr1[i])
        n++;
    }
    return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); //[4,1,2,3,5,6]


-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//Remove all falsy values from an array.

function bouncer(arr) {
    // Don't show a false ID to this bouncer.


    let newArr = arr.filter(Boolean);
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));


//or this could work to help explain a little more of what is happening here:


function falsyTerminate(arr) {
    // Don't show a false ID to this bouncer.


    let newArr = arr.filter(n => Boolean(n) == true);
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9])); //returns [7,'ate',9]




//to simplify this to basic levels. (if you need to understand how the higher order function works at a base level) I used a for loop instead
//put the iteration inside a if statement that checks if it ( the Boolean(arr[i]) ) is true.


function bouncer(arr) {
    let newARr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(bouncer([false, null, 0, NaN, undefined, ''])); //  returns empty array



-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//Return the provided string with the first letter of each word capitalized. 


function titelCase(str) {
    str = str.split(' ').map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot")) // I'm A Little Tea Pot 

//as you can see I turned the string into an array and then used the map method to target the first index in each array and make it upper case, and then concat the remainder of the string with substr(1), effectivly bringing in the whole string minus the first index. Finally return the str joined with .join(' ') to change it back from an array. 



-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//You are given two arrays and an index.
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.  Begin inserting elements are the index n of the second arry. Return the resulting array. The input arrays should remain the same after the function runs. 

first:
    function frankenSplice(arr1, arr2, n) {
        let new2 = arr2.splice();

        for (let i = 0; i < arr1.length; i++) {
            new2.splice(n, 0, arr1[i]);
            n++
        }
        return new2;
    }

console.log(frankenSplice([1, 2, 3], [4, 5], 1))




second:
    function frankenSplice(arr1, arr2, n) {

        let arrNew = [];
        arrNew = arr2.slice(0)
        arrNew.splice(n, 0, ...arr1)

        return arrNew;
    }

console.log(frankenSplice([1, 2, 3], [4, 5], 1))




-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


//Return the lowest index at which a value (second argument) should be inserted into an array(first argument) once it has been sorted. 
//The returned index value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1(index 0), 
//but less than 2(index 1)

//arr.sort((a,b) => a-b; (that is ascending order)

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
}

getIndexToIns([40, 60], 50)

//better yet

function getIndexToIns(arr, num) {
    arr.push(num);
    return arr.sort((a, b) => a - b).indexOf(num);
}

getIndexToIns([40, 60], 50)




//sort, a-b, you are really just looking for the positive differences. 
// exARr[5,4,3,8]  ascend*=>   (5-4 = +)  a - b = + to the right. ==> 
// exArr[5,4,3,8]  descend* => (5-4 = +)  b- a =  + to the left <==
//don't get lost in the weeds of compScience sort algorithms. You are looking fo the positive differences. it's
//intuitive 



-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -


//Return true if the string in the first element of the array contains all of the letter of the string in the second array.
//For example, ["hello","Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. 


function sameOrNot() {
    var modelLetters = arr[1].toLowerCase();
    var isThisOne = arr[0].toLowerCase();
    for (let i = 0; i < modelLetters.length; i++) {
        if (isThisOne.indexOf(modelLetters[i] < 0) return false;
        }
        return true;
    }

    console.log(sameOrNot(['hello', 'hey'])); //false




    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

    //Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

    function chunkArrayInGroups(arr, size) {
        let newArr = [];
        for (let i = ; i < arr.legnth; i += size) {
            newArr.push(arr.slice(i, i + size))
        }
        return newArr;
    }

    console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2))





    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

    // Intermediate Algorithm Scripting


    //Sum All Numbers in a Range

    // Well pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
    // e.g. 6,1. put in order, 1,6  sum of them. 1+6=7.  sum of all numbers in between 2+3+4+5 = 14 + 7 = 21.  
    //The lowest number will not always come first. 

    //make function that takes in array parameter
    function sumAll(arr) {
        let newArr = arr.sort((a, b) => a - b); //sort arr ascending order
        let low = newArr[0];
        let high = newArr[1];
        console.log(low, high) //checking if that worked
        let total = 0; //new variable for final total
        //for loop to add them first and last and inbetweens (really just all of them together)
        for (let i = low; i <= high; i++) {
            total += i;
        }
        return total;
    }

    sumAll([4, 1]); //10 






    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


    // Diff Tow Arrays

    // Compare two arrays and return a new array with any items only found in one of the two given arrys, but not both. 




    // I need a function inside of a function that can test each array against the other, in one for loop. Is first index in the other array? No? Put it in the special array. Then flip flop

    function oneDoesNotBelong(arr1, arr2) {

        let first = arr1;
        let second = arr2;
        let newArr = [];

        function checkEach(first, second) {
            for (let i = 0; i < first.length; i++) {
                if (second.indexOf(first[i]) === -1) {
                    //pushing the ones found only in first
                    newArr.push(first[i]);
                }
            }
        }

        checkEach(first, second);
        checkEach(second, first);
        return newArr;
    }

    console.log(oneDoesNotBelong([1, 2, 3, 5], [1, 2, 3, 4, 5]));





    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    // Seek and Destroy

    // You will be provided with an initial array (the first argument), followed by one or more arguments. Remove all elements from the intial array that are of the same value as these arguments. I.e, if any of the other args are in array1, remove them from array1.

    //use rest operator for the other undefined amount of args
    function removeArgs(arr, ...args) {
        //cycle through arr with filter and return the elements from arr that are NOT including in args
        let result = arr.filter(word => !args.includes(word))
        return result;
    }

    removeArgs([1, 2, 3, 1, 2, 3], 2, 3); //1,1

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



    // Wherefor art though

    // Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs(second argument) Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. 


    function whatIsInAName(collection, source) {

        //gives us the keys(prop)
        var sourceKeys = Object.keys(source);
        console.log(source)
            //filter the collection
        return collection.filter(function(obj) {
            for (let i = 0; i < sourceKeys.length; i++) {
                if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                    return false;
                }
            }
            return true;
        });
    }

    //above, we checked if collection does not have a prop that matches each indexing of sourceKeys,
    //then we checked if collection did not have a value equal to source's key/value
    //if no matches, return false, if true, that filters it out to the new array 
    //basically, if there is anything that disqualifies the filtering out of something matching, is 'false' the filter wants to filter out true things. 

    console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capule" }));


    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

    //Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.



    function spinalCase(str) {

        //set regex to find any whitespace OR any _
        let regex = /\s|_/g;

        //set str = to (if you find a lower case followed by an UpperCase, put a space between them)	   
        str = str.replace(/([a-z])([A-Z])/g, '$1 $2');


        // finally, return the str with another filter, any whitespace, or _ with a '-' and make it all lowercase. 	   
        return str.replace(regex, '-').toLowerCase();
    }

    console.log(spinalCase('This Is Spinal Tap'));