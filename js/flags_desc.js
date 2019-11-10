class EventBus{
	constructor(){
		const _ = this;

		_.events = {};
	}
	add(event,fn){ // changeView, test
		const _ = this;
		if(!_.events[event]) _.events[event] = [];
		_.events[event].push(fn);
	}
	trigger(event,data=null){
		const _ = this;
		console.warn("Сработало событие: " +event);
		if(!_.events[event]) return;
		for(let i = 0; i < _.events[event].length;i++){
			_.events[event][i](data);
		}
	}
	remove(event){
		const _= this;
		
	}
}

const Bus = new EventBus();


class Player{
	constructor(name){
		const _ = this;
		_.name  = name;
		_.validateErrors = {
			cnt: 0,
			text: []
		};
		_.stepErrors = {
			cnt:0,
			step: []
		}
		_.steps = [];
	}
}
class View{
	constructor(){
		Bus.add('enterName',this.enterName);
	}
	
	changeView(){
		console.log('Вид изменен');
	}
	showPlayerStep(params){}
}
class consoleView extends View{
	constructor(){
		super();
	}
	enterName(player){
		player.name = prompt('Введите имя игрока');
	}
	showPlayerStep(params){
		console.log(params.player.name+' походил: ' + params.step);
	}
}
class alertView{
	showPlayerStep(params){
		console.log(params.player.name+' походил: ' + params.step);
	}
}
class Flags{
 constructor(view){
 	const _ = this;
	Bus.add('validateError',_.validateError.bind(this));
 	
	Bus.add('stepError',_.stepError.bind(this));

 	_.view = view;
 	_.errors = 0;
 	
	_.flags = 21;
	_.player = false;
	_.started = false;
	_.step = 0;
	
	_.player1 = new Player();
	_.player2 = new Player();

	Bus.trigger('enterName',_.player1);
	Bus.trigger('enterName',_.player2);


	

	//_.player2 = new Player("PC");

	_.currentPlayer = _.player1;
	//this.showType = prompt('Введите способ отображения(alert|console|html)')
 	
 }

 validateError(data){
 	data.player.validateErrors['cnt']+=1;
 	data.player.validateErrors['text'].push(data.text);
 }

 stepError(data){
 	data.player.stepErrors['cnt']+=1;
 	data.player.stepErrors['step'].push(data.step);
 }

 incErrors(){
 	this.errors+=1;
 }
 exitGame(){
 	if(this.step == -1){
		return true;
	}	
	return false;
 }
 validateStep(){

	if(isNaN(this.step)){
		Bus.trigger('validateError', {
				text: this.rawStep,
				player: this.currentPlayer
		});	
		return false;
	} 
	return true;
 }

 checkStep(){
 	if( (this.step != 1) && (this.step != 2) && (this.step != 3) ){
 		Bus.trigger('stepError', {
 			step: this.step,
 			player: this.currentPlayer
 		})
 		return false;
 	}
 	return true
 }


 showAlert(type){
 	if(type == 'validate'){
		console.error('Не корректный ввод. Введите число');
	}
	if(type == 'check'){
		console.error('Не корректный ввод. Введите число от 1 до 3');
	}
 }
 changePlayer(){
	this.player = !this.player;
	if(!this.player){
		this.currentPlayer = this.player1;
	}else{
		this.currentPlayer = this.player2;
	}
 }
 showFlagsRest(){
 	console.log( 'В игре осталось '+ this.cost +' флагов');
 }
 checkWin(){
 	if(this.flags <= 3){
		return true;
	}	
	return false;
 }
 showWinner(){
	console.warn('Победил '+ this.currentPlayer.name);
	console.log(Bus);
	console.log(this);
 }
 start(){
 	this.started = true;


	if(this.checkWin()){
		this.showWinner();
		return ;
	}
	this.rawStep = prompt('Введите число от 1 до 3');
	this.step = this.rawStep;
	if(this.step == 'change'){
		Bus.trigger('enterName',this.currentPlayer);
		return this.start();
	}else{
		this.step*=1;
	}
	
	if( this.exitGame() ) return;

	if( !this.validateStep() ) {
		return this.start();
	}
	if( !this.checkStep() ) {
		Bus.trigger('showAlert','check');
		return this.start();
	}

	this.cost = this.flags-=this.step;

	

	this.view.showPlayerStep({
		player: this.currentPlayer,
		step:this.step
	});
	this.showFlagsRest();
	this.changePlayer();
	return this.start();
 }
}



let flags = new Flags(new consoleView());
flags.start();









