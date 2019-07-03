//Repeat a given string str(first argument) for num times (second argument). 
//Return an empty sting if num is not a positive number.


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


























