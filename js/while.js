 let i = 10;
// Цикл с предусловием
while(i < 10){
	console.log(i); // 0 1 2 3
	i= i+1;
}

// Цикл с постусловием

do{
	console.log(i);
	i= i+1;
}while(i< 10);

for(let i=0; i < 10; i=i+1 ){
		console.log(i)
}
/*for( объявляем переменную счетчик; условие цикла; 
	условие наращивания ){

}


if(условие){

}else{

}*/


let morning = 8,

	wake = 7;	

if(wake > morning){
	console.log('Я опоздал на работу');
}else if(wake < 7) {
	console.log('Можно ещё поспать');
}else{
	console.log('Снова работать');
}


let shop = 18,
	mother = 0,
	guy = 21;

// Псевдоложь '',false,0,undefined

if('' === false){
	console.log('Это пустая строка');
}
if(!'.'){
	console.log('Это пустая строка');
}

if(!0){
	console.log('Ноль это Псевдоложь');
}



if(guy > shop){
	if(mother){
		console.log('Покупать можно');
	}else{
		console.log('Мама не разрешает');
	}

	if(!mother){
		console.log('Мама не разрешает');
	}

	console.log('Покупать можно');


}else{
	console.log('Покупать нельзя');
}



