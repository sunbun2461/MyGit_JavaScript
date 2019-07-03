//Check if a string (first argument, str) ends with the given target string (second argument, target) 
		//In other words, is target the ending of str?


		function confirmEnding(str,target){
			let testable = str.substring(str.length-target.length);
			console.log(testable)//so I could see that the substring worked as I wanted it too
		
			let answer = (testable === target); 
		
			return answer;
		}

console.log(confirmEnding("Bastian","n"));































