//Return the lowest index at which a value (second argument) should be inserted into an 
//array(first argument) once it has been sorted. 
//The returned index value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is 
//greater than 1(index 0), but less than 2(index 1) 
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
//don't get lost in the weeds of compScience sort algorithms. You are looking fo the positive 
//differences. It's intuitive 












