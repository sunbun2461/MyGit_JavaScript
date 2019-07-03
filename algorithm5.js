// You are given two arrays and an index
// Use the array methods slice and splice to copy each element of the first array
// into the second array, in order.
// begin inserting elements at index n of the second array
// Return the resulting array. The input arrays should remain the same 
// after the function runs. 

	function frankenSplice(arr1,arr2,n){
		let newArr = arr2.splice();
		for(let i = 0; i < arr1.lenth; i++){
			newArr.splice(n,0,arr1[i])
			n++;
		}
		return newArr;
	}
console.log(frankenSplice([1,2,3],[4,5,6],1));//[4,1,2,3,5,6]





























