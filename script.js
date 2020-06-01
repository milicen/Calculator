const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators'); 
const display = document.querySelector('textarea');
const clearBtn = document.querySelector('#clear');
const backBtn = document.querySelector('#back');
const ansBtn = document.querySelector('#total');

function backSpace(){
	let inputs = display.innerHTML.split('');
	inputs.pop();
	display.innerHTML = inputs.join('');
}

function clear(){
	let inputs = display.innerHTML.split('');
	for(let i = inputs.length-1; i >= 0; i--){
		inputs.pop();
	}
	display.innerHTML = inputs.join('');

}

function ans(){
	let inputs = display.innerHTML.split('');
	let test = inputs.indexOf('/');
	// console.log(typeof(test));
	let operators = {
		'+': function(a,b){return a+b},
		'-': function(a,b){return a-b},
		'/': function(a,b){return a/b},
		'*': function(a,b){return a*b}
	};
	let tempLeft = [];
	let tempRight = [];
	for(let i = 0; i <= inputs.length-1;i++){
		if(inputs[i] == '/' || inputs[i] == '*'){
			for(let x = i-1; x >= 0 ; x--){
				if(inputs[x] != '/' || inputs[x] != '*' || inputs[x] != '+' || inputs[x] != '-'){
					tempLeft.unshift(inputs[x]);
				}
				else{
					break;
				}
			}
			for(let y = i+1; y <= inputs.length-1; y++){
				if(inputs[y] != '/' || inputs[y] != '*' || inputs[y] != '+' || inputs[y] != '-'){
					tempRight.push(inputs[y]);
				}
				else{
					break;
				}
			}
			let op = inputs[i];
			display.innerHTML = operators[op](parseInt(tempLeft.join('')),parseInt(tempRight.join('')));
		}
	}
	console.log(test);


}

ansBtn.addEventListener('click', function(e){
	ans();
})

clearBtn.addEventListener('click', function(e){
	clear();
})

backBtn.addEventListener('click', function(e){
	backSpace();
})

operators.forEach(operator => operator.addEventListener('click', function(e){
	display.innerHTML += operator.innerHTML;
}))

numbers.forEach(number => number.addEventListener('click', function(e){
	display.innerHTML += number.innerHTML;
}))