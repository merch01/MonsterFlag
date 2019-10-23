

/*let a = 2, b =3;
let c = a+b;

let test = console.log(c)
console.log('Привет')

*/
/*
	function имя_функции(параметры){

	} 
	имя_функции();
*/

// 

/*function sum(a,b){
	let c = 5;
	return a + b+c;
}*/

function changeA(){
	a = 20; // Изменение в глобальной области
}

let a = 5, c = 10;

a = 10;
changeA();


/*function log(var1){
	console.log(var1);
}*/

let name = 'Вася', secondName = 'Петя';

name = secondName;


//let log = console.log;
//log('Привет');


function sum(...params){
	console.log(params);
}
//log(sum(1,2,3,4)); // 3

/*function sum(a,b){
	return a + b;
}
sum(2,2);

let sum = function(a,b){
	return a + b;
}

sum(4,4);*/
/*function(a,b){
	return a + b;
}*/
// 5 = 120
// 1*2*3*4*5 = 120

function factorial(digit,step=1,action=console.log){
 /*
	изначально в digit передаётся 
	искомое число факториала.
	а в step шаг умножения


	создать переменную вывода out
	создать переменную счётчика cnt = 1
	создать временную переменную temp = 1
 	пока cnt <= digit
	переменную вывода умножать на cnt
	переменную счётчка cnt увеличивать на 1

	out = 1;
	cnt = 1;
	пока(cnt <= digit){
		out = out * temp
		cnt++;
		temp+=step;
	}
	action(out);
 */

 	let out = 1,
 		cnt = 1,
 		temp = 1;
 	while( cnt <= digit ){
 		out = out * temp
		cnt++;
		temp+=step;	
 	}	
	action(out);
}
/*function multiple(param){
	console.log(param * 2);
}
factorial(5,1,console.log);
factorial(5,1,function(param){
	console.log(param * 2);
});
factorial(5,1,function(param){
	console.log(param / 8)
});*/

//factorial(5);

//factorial(5,1, (fact) => console.log(fact / 2));


function sumDivide(a,b){
	return function(divide=1){
		return (a + b) / divide;
	}
}

let div = sumDivide(2,3);

//console.log(  div(50) ); // 0.1

function drawTriangle(height,symbol){
	let str = '';
	for(let i = 1; i <= height;i++){
		str+=symbol;
		console.log(str);
	}
}
drawTriangle(5,'*');

function drawTree(){

}
function evklid(m,n){
	while( m != n ){
		if(m > n){
			m = m -n;
		}else{
			n = n - m;
		}
	}
	return n;
}
evklid(15);