//You are given two arrays and an index.
//Use the array methods slice and splice to copy each element of the first array into the 
//second array, in order.  Begin inserting elements are the index n of the second arry. 
//Return the resulting array. The input arrays should 
//remain the same after the function runs. 

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












