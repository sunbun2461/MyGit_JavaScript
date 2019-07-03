//Return the provided string with the first letter of each word capitalized. 


	function titelCase(str){
str = str.split(' ').map( item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
return str.join(' ');
	}

console.log(titleCase("I'm a little tea pot"))// I'm A Little Tea Pot 

//as you can see I turned the string into an array and then used the map method to 
//target the first index in each array and make it upper case, and then concat the 
//remainder of the string with substr(1), effectivly bringing in the 
//whole string minus the first index. 
//Finally return the str joined with .join(' ') 
//to change it back from an array. 





























