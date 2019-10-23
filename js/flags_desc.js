function Flags(){

	this.flags = 21;
	this.player = false;
	this.started = false;
	this.step = 0;
}
//Функция которая вводит начальные переменные


Flags.prototype.exitGame = function (){
	if(this.step == -1){
		return true;
	}	
	return false;
}	
//Это функция выхода из игры, она завершает игру получив значение "-1" в поле ввода количества флажков.


Flags.prototype.validateStep = function (){
	if(isNaN(this.step)) return false;
	return true;
}
//Это функция проверки введенных данных на тип (число ли это)


Flags.prototype.checkStep = function(){
	if( (this.step != 1) && (this.step != 2) && (this.step != 3) ){
		return false;
	}
	return true;
}
//Это функция проверки введенных данных на удовлетворение правилам игры (от 1 до 3)


Flags.prototype.showAlert = function (type){
	if(type == 'validate'){
		console.error('Не корректный ввод. Введите число');
	}
	if(type == 'check'){
		console.error('Не корректный ввод. Введите число от 1 до 3');
	}
}
//Это функция, которая выводит предупреждение, если введенные данные не соответствуют требованиям


Flags.prototype.changePlayer = function (){
	this.player = !this.player;
}
//Эта функция меняет очередь хода


Flags.prototype.showFlagsRest = function (){
 	console.log( 'В игре осталось '+ this.cost +' флагов');
}
//Это функция, выводит количество оставшихся флагов в консоль


Flags.prototype.showPlayerStep = function (){
	if(!this.player){
		console.log('Игрок 1 походил: ' + this.step);
	}else{
		console.log('Игрок 2 походил: ' + this.step);
	}
}
//Эта функция выводит в консоль ход игрока


Flags.prototype.checkWin = function (){
	if(this.flags <= 3){
		return true;
	}	
	return false;
}
//Здесь идет проверка оставшихся флагов на количество, необходимое для победы


Flags.prototype.showWinner = function(){
	if(!this.player){
		console.warn('Победил Игрок 1');
	}else{
		console.warn('Победил Игрок 2');
	}
}
//Эта функция объявляет победителя


Flags.prototype.start = function(){
	this.started = true;
//Начало игры	
	
	
	if(this.checkWin()){
		this.showWinner();
		return ;
	}
//Игра проводит проверку количества флагов на условие победы
	
	
	this.step = prompt('Введите число от 1 до 3') * 1;
//Запрос игрой у игрока хода, числа флагов
	
	
	if( this.exitGame() ) return;
//Проверка хода на условие выхода
	
	
	if( !this.validateStep() ) {
		this.showAlert('validate');
		return this.start();
	}
//Далее идет проверка на правильность ввода, если ввели неправильно, то выходит предупреждение и ход перезапускается
	
	
	if( !this.checkStep() ) {
		this.showAlert('check');
		return this.start();
	}
//Так же идет проверка на разрешенный ход, так же выходит предупреждение и ход перезапускается, если ход запрещен
	

	this.cost = this.flags-=this.step;
//После хода игрока игра отнимает от общего количества флагов ход игрока
	
	
	this.changePlayer();
//Очередь хода меняется, ходит 2ой игрок
	

	this.showPlayerStep();
	this.showFlagsRest();
	return this.start();
//Игра выводит ход игрока и количество оставшихся флагов и функция перезапускается.
}