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

//to simplify this to basic levels. 
//(if you need to understand how the higher order function works at a base level) 
//I used a for loop instead
//put the iteration inside a if statement that checks if it 
//( the Boolean(arr[i]) ) is true.


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

