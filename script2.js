var el = document.getElementById('row');
var collumn1 = document.getElementById('col1')
var collumn2 = document.getElementById('col2')

var sortable = new Sortable(el, {
    group: 'shared',
	swap: true,
	swapClass: "highlight",
	animation: 150,
});

var sortableCol1 = new Sortable(collumn1, {
    group: 'shared',
	animation: 150,
});

var sortableCol2 = new Sortable(collumn2, {
    group: 'shared',
	animation: 150,
});

let numberOfQuestion = 5; 
let numberOfQuestionSum = 12;


let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}