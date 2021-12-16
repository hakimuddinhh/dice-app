const reloadBtn = document.querySelector('#reload-btn');
const chances = [1,1,2,1,2,3,3,2,3,4,8,4];

// 1 => 2
// 2 => 3
// 3 => 1
// 4 => 4
// 5 => 8

reloadBtn.addEventListener('click', (e) => {
	const randomIdx = getChanceValue();
  showUpdatedValue(randomIdx)
  
})

function getChanceValue() {
	const randomIdx = Math.floor((Math.random() * chances.length));
	return chances[randomIdx];
}

function showUpdatedValue(updatedValue) {
	document.querySelectorAll('.score').forEach(function(elem, idx) {
			elem.innerText = updatedValue;

            elem.classList.remove('animate-n'); // reset animation
            void elem.offsetWidth; // trigger reflow
            elem.classList.add('animate-n'); // start animation
    })
    new Audio("./roll.wav").play()
}