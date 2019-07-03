

// Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.



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







