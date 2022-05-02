const items = [
{name:'Bike', price: 100},
{name:'TV', price: 200},
{name:'Album', price: 10},
{name:'Book', price: 5},
{name:'Price', price: 100},
{name:'Computer', price: 1000},
]

const filtered = items.filter(function(value){
	return value <= 10;
})

let total = 0;

filtered = items.filter(function(value) {
	total += value;
});

console.log("total item exept under 10", maximum);