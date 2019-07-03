Free Code Camp Algorithms for GitHub
-------------------------------------

		// The following are free code camps basic and intermediate algorithms I am working through a second time. They will be placed here only after I have completed them without help and can fully understand and explain them to a five year old ;)


//Here we go






// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.



function largestOfFour(arr) {

  let largestNum = [];
  for(let i = 0; i < arr.length;i++){
      largestNum.push(Math.max(...arr[i]))
  }    


  return largestNum;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));//[5,27,39,1001]

//another way (without awesome things like rest operater and Math.max)

	function largestOfFour(arr){
		var largestNum = [];
		for(let i = 0;i < arr.length; i++){
			var eachMax = arr[i][0];
		  for(let j = 0; j < arr[i].length; j++){
		  	if(arr[i][j] > eachMax){
		  		eachMax = arr[i][j];
		  	}
		  }
		  largestNum.push(eachMax)
		}
	return largestNum;
	}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));//[5,27,39,1001]

-------------------------------------------------------------------------------------------------------


//Check if a string (first argument, str) ends with the given target string (second argument, target) 
		//In other words, is target the ending of str?


		function confirmEnding(str,target){
			let testable = str.substring(str.length-target.length);
			console.log(testable)//so I could see that the substring worked as I wanted it too
		
			let answer = (testable === target); 
		
			return answer;
		}

console.log(confirmEnding("Bastian","n"));

-------------------------------------------------------------------------------------------------------


//Repeat a given string str(first argument) for num times (second argument). Return an empty sting if num is not a positive number.


		function repeatStringNumTimes(str,num){
			let newStr = '';
			if(num <= 0){
				return newStr;
			}
			newStr = [];
			str = str.split('');
			for(let i = 0; i < num; i++){
				newStr.push(str)
			}
			newStr = newStr.join('');
			return newStr;
		}  

console.log(repeatStringNumTimes('abc',3));


-------------------------------------------------------------------------------------------------------


//Check if a value is classified as a boolean primitve. Return true or false


	function booWho(bool){
		return ((typeof bool == 'boolean')? true: false);
	}

console.log(booWho(null));


//easy function to write. I used ternary operator to simplify things, once I realized I needed to check the type, it came about relatively quickly. 


-----------------------------------------------------------------------------------------------------

//You are given two arrays and an index
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//begin inserting elements at index n of the second array
//Return the resulting array. The input arrays should remain the same after the function runs. 

	function frankenSplice(arr1,arr2,n){
		let newArr = arr2.splice();
		for(let i = 0; i < arr1.lenth; i++){
			newArr.splice(n,0,arr1[i])
			n++;
		}
		return newArr;
	}
console.log(frankenSplice([1,2,3],[4,5,6],1));//[4,1,2,3,5,6]


--------------------------------------------------------------------------------------------------------

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

console.log(bouncer([7, "ate", "", false, 9]));  //returns [7,'ate',9]




//to simplify this to basic levels. (if you need to understand how the higher order function works at a base level) I used a for loop instead
//put the iteration inside a if statement that checks if it ( the Boolean(arr[i]) ) is true.


function bouncer(arr){
	let newARr = [];
		for(let i = 0; i < arr.length; i++){
			if(Boolean(arr[i])){
				newArr.push(arr[i])
			}
		}
		return newArr;
}

console.log(bouncer([false,null, 0, NaN, undefined, '']));//  returns empty array



---------------------------------------------------------------------------------------------------------

//Return the provided string with the first letter of each word capitalized. 


	function titelCase(str){
		str = str.split(' ').map( item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() )
		return str.join(' ');
	}

console.log(titleCase("I'm a little tea pot"))// I'm A Little Tea Pot 

//as you can see I turned the string into an array and then used the map method to target the first index in each array and make it upper case, and then concat the remainder of the string with substr(1), effectivly bringing in the whole string minus the first index. Finally return the str joined with .join(' ') to change it back from an array. 



-----------------------------------------------------------------------------------------------------------

//You are given two arrays and an index.
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.  Begin inserting elements are the index n of the second arry. Return the resulting array. The input arrays should remain the same after the function runs. 

first:
		function frankenSplice(arr1, arr2, n){
			let new2 = arr2.splice();

			for(let i = 0; i < arr1.length; i++){
				new2.splice(n,0,arr1[i]);
				n++
			}
			return new2;
		}

		console.log(frankenSplice([1,2,3],[4,5],1))




second:
		function frankenSplice(arr1, arr2, n){
			
			let arrNew = [];
			arrNew = arr2.slice(0)
			arrNew.splice(n,0,...arr1)
			
			return arrNew;
		}

		console.log(frankenSplice([1,2,3],[4,5],1))




----------------------------------------------------------------------------------------------------------------


//Return the lowest index at which a value (second argument) should be inserted into an array(first argument) once it has been sorted. 
//The returned index value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1(index 0), 
//but less than 2(index 1)

//arr.sort((a,b) => a-b; (that is ascending order)

function getIndexToIns(arr,num){
	arr.push(num);
	arr.sort((a,b) => a-b);
	return arr.indexOf(num);
}

getIndexToIns([40,60], 50)

//better yet

function getIndexToIns(arr,num){
	arr.push(num);
	return arr.sort((a,b) => a-b).indexOf(num);
}

getIndexToIns([40,60], 50)




//sort, a-b, you are really just looking for the positive differences. 
// exARr[5,4,3,8]  ascend*=>   (5-4 = +)  a - b = + to the right. ==> 
// exArr[5,4,3,8]  descend* => (5-4 = +)  b- a =  + to the left <==
//don't get lost in the weeds of compScience sort algorithms. You are looking fo the positive differences. it's
//intuitive 



-------------------------------------------------------------------------------------------------------------------------------------------------------


//Return true if the string in the first element of the array contains all of the letter of the string in the second array.
//For example, ["hello","Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. 


		function sameOrNot(){
			var modelLetters = arr[1].toLowerCase();
			var isThisOne = arr[0].toLowerCase();
			for(let i = 0; i < modelLetters.length; i++){
				if(isThisOne.indexOf(modelLetters[i] < 0)
					return false;
			}
			return true;
		}

		console.log(sameOrNot(['hello','hey']));//false




-------------------------------------------------------------------------------------------------------------------------------------

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr,size){
	let newArr= [];
	for(let i = ; i < arr.legnth;i+= size){
		newArr.push(arr.slice(i,i+size))
	}
	return newArr;
}

console.log(chunkArrayInGroups(['a','b','c','d'],2))





---------------------------------------------------------------------------------------------------------------------------------