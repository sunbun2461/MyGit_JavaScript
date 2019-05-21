Free Code Camp Algorithms for GitHubsfff
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














































