module.exports = function getZerosCount(number){
// https://tproger.ru/problems/how-many-zeros-at-the-end-of-the-factorial-of-100/
// Нулей в конце n! будет столько, сколько раз встречается 5 среди разложения всех чисел от 1 до n на простые множители.
// 100/5 = 20/5 = 4 ==> 24;
// 1000/5 = 200/5 = 40/5 = 8/5 = 1 => 249;
//          ---     --     -     - 


// result = Math.floor(number / 5);
// result2 = Math.floor(result / 5);
// result3 = Math.floor(result2 / 5);
// result4 = Math.floor(result3 / 5);
// ...
// unless result(n) > 5;
// answer = result + result1 + result2 + ... + result(n)
// 
// 

var count = 0,
	str = 0;

function calculate() {
	var result = number / 5; //200
	  str = Math.floor(result); // 200
		while (result > 5) {
		  result = (result / 5); //40  //8  //1
			count += Math.floor(result); 
		}
			return (count + str);
}


return calculate();

}