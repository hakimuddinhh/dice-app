const reloadBtn = document.querySelector('#reload-btn');
const chances = [1,1,1,2,2,2,2,2,3,3,3,3,4,4,8];

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
	const randomIdx = Math.floor((Math.random() * 15));
	return chances[randomIdx];
}

function showUpdatedValue(updatedValue) {
	document.querySelectorAll('.score').forEach(function(elem, idx) {
			elem.innerText = updatedValue;
  })
}