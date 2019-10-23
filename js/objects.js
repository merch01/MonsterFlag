// function sum(...params){
// 	console.log(params);
// }

// function evklid(m/*106*/,n/*16*/){
// 	//console.log(m+ ' % '+ n + '= '+ (m % n));
// 	if(!(m % n)) return n; // 106 16 = 10
// 	return evklid(n,m % n);
// }

// evklid(106,16);

// let t = 5; // 120
// function fact(f){
// 	if( f === 1) return f;
// 	return f * fact(f-1);
// }


// function foo(a,b){
// 	a + sum(a,b);
// 	log(a);
// }
// function sum(a,b){
// 	return a+b;
// }
// function log(test){
// 	console.log(test);
// }

// foo(5,5);

/*
CallStack
1 foo
2 sum
3 log
4 console.log
*/

/* Игра флажки */
// let mod = prompt('1 или 2') * 1;
function startGame(mod){
	mod = prompt('Введите 1 для игры против PC или 2 против человека') * 1;
	if (mod == 2){
	MonsterFlag();
	}

	else if (mod == 1){
		MonsterFlagIi();
	}
	else if (isNaN(mod) || (mod !=1 || mod!=2)){
			alert('Не коректный ввод. Введите 1 или 2');
		}
}

function exitGame(step){
	if(step == -1){
		return true;
		}	
	return false;
}	
function checkWin(flags){
	if(flags <= 3){
		return true;
	}		return false;
}
function validateStep(step){
	if(isNaN(step)) return false;
	return true;
}
function checkStep(step){
	if( (step != 1) && (step != 2) && (step != 3) ){
		return false;
	}
	return true;
}
function changePlayer(player){
	player = !player;
}
function showPlayerStep(player,step){
	if(!player){
		console.log('Игрок 1 походил: ' + step);
	}else{
		console.log('Игрок 2 походил: ' + step);
	}
}
function showFlagsRest(cost){
 	console.log( 'В игре осталось '+ cost +' флагов');
}
function showWinner(player){
	if(!player){
		console.warn('Победил Игрок 1');
	}else{
		console.warn('Победил Игрок 2');
	}
}
function showWinnerIi(player){
	if(!player){
		console.warn('Победил II');
	}else{
		console.warn('Победил Игрок 2');
	}
}
function showPlayerStepIi(player,step){
	if(!player){
		console.log('II походил: ' + step);
	}else{
		console.log('Игрок 2 походил: ' + step);
	}
}
function showAlert(type){
	if(type == 'validate'){
		console.error('Не корректный ввод. Введите число');
	}
	if(type == 'check'){
		console.error('Не корректный ввод. Введите число от 1 до 3');
	}
}
function MonsterFlag(flags = 21,player = false){
//	checkStep(step);
	if( checkWin(flags) ) {
		showWinner(player);
		return; 
	}
	let step = prompt('Введите число от 1 до 3') * 1;
	
	if( exitGame(step) ) return;

	if( !validateStep(step) ) {
		showAlert('validate');
		return MonsterFlag(flags,player);
	}
	if( !checkStep(step) ) {
		showAlert('check');
		return MonsterFlag(flags,player);
	}

	let cost = flags-=step;

	changePlayer(player);

	showPlayerStep(player,step);
	showFlagsRest(cost);

	return MonsterFlag(cost,!player);
}

//Игра с ИИ.
function MonsterFlagIi(flags = 21,player = false){
	let step;
	checkStep(step);
	if( checkWin(flags) ) {
		showWinnerIi(player);
		return;
	}

	// let step;

	if(!player){
		 step = checkStepIi(flags)
	}else if(player){
		 step = prompt('Введите число от 1 до 3') * 1
	}

	// let step = prompt('Введите число от 1 до 3') * 1;
	
	if( exitGame(step) ) return;

	if( !validateStep(step) ) {
		showAlert('validate');
		return MonsterFlagIi(flags,player);
	}
	if( !checkStep(step) ) {
		showAlert('check');
		return MonsterFlagIi(flags,player);
	}

	let cost = flags-=step;

	changePlayer(player);

	showPlayerStepIi(player,step);
	showFlagsRest(cost);

	return MonsterFlagIi(cost,!player);
}

//Проверка шага для ИИ
// 
function checkStepIi(flags){
	if (flags % 4 == 0){
		step = /*flags - */2;
		return step;
	}
	else{
		step = (flags % 4);
		return step;
	} 
}

// checkStepIi(21);


function Flags(){
	this.flags = 21;
	this.player = false;
	this.startred = false;
	this.step = 0;
}

Flags.prototype.startGame = function(){
	this.mod = prompt('Введите 1 для игры против PC или 2 против человека') * 1;
	if (this.mod == 2){
	MonsterFlag();
	}

	else if (this.mod == 1){
		MonsterFlagIi();
	}
	else if (isNaN(this.mod) || (this.mod !=1 || this.mod!=2)){
			alert('Не коректный ввод. Введите 1 или 2');
		}
}
Flags.prototype.exitGame = function(){
	if(this.step == -1){
		return true;
		}	
	return false;
}	
Flags.prototype.checkWin = function(){
	if(this.flags <= 3){
		return true;
	}		return false;
}
Flags.prototype.validateStep = function(){
	if(isNaN(this.step)) return false;
	return true;
}
Flags.prototype.checkStep = function(){
	if( (this.step != 1) && (this.step != 2) && (this.step != 3) ){
		return false;
	}
	return true;
}
Flags.prototype.changePlayer = function(){

	this.player = !this.player;
}
Flags.prototype.showPlayerStep = function(){
	if(!this.player){
		console.log('Игрок 1 походил: ' + this.step);
	}else{
		console.log('Игрок 2 походил: ' + this.step);
	}
}
Flags.prototype.showFlagsRest = function(){

 	console.log( 'В игре осталось '+ this.cost +' флагов');
}
Flags.prototype.showWinner = function(){
	if(!this.player){
		console.warn('Победил Игрок 1');
	}else{
		console.warn('Победил Игрок 2');
	}
}
Flags.prototype.showWinnerIi = function(){
	if(!this.player){
		console.warn('Победил II');
	}else{
		console.warn('Победил Игрок 2');
	}
}
Flags.prototype.showPlayerStepIi = function(){
	if(!this.player){
		console.log('II походил: ' + this.step);
	}else{
		console.log('Игрок 2 походил: ' + this.step);
	}
}
Flags.prototype.showAlert = function(){
	if(this.type == 'validate'){
		console.error('Не корректный ввод. Введите число');
	}
	if(this.type == 'check'){
		console.error('Не корректный ввод. Введите число от 1 до 3');
	}
}
Flags.prototype.start = function(){
	this.started = true;
		if( this.checkWin() ) {
			this.showWinner();
			return; 
		}
		this.step = prompt('Введите число от 1 до 3') * 1;
		
		if( this.exitGame() ) return;

		if( !this.validateStep() ) {
			this.showAlert('validate');
			return this.start();
		}
		if( !this.checkStep() ) {
			this.showAlert('check');
			return this.start();
		}

		this.cost = this.flags-=this.step;

		this.changePlayer();

		this.showPlayerStep();
		this.showFlagsRest();

		return this.start();
}

let flags = new Flags();
// flags.start();
// console.log(flags.flags)