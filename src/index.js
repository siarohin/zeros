module.exports = function getZerosCount(number){
let count = 0,
	str = 0;

function calculate() {
	let result = number / 5; 
	  str = Math.floor(result); 
		while (result > 5) {
		  result = (result / 5);
			count += Math.floor(result); 
		}
			return (count + str);
}

 return calculate();

}