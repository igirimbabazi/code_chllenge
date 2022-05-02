const items = [
{name:'Bike', price: 100},
{name:'TV', price: 200},
{name:'Album', price: 10},
{name:'Book', price: 5},
{name:'Price', price: 100},
{name:'Computer', price: 1000},
]

let minimum = infinity

for(let item of items){
	if (item < minimum)
      minimum = item

};

console.log("cheap item ", minimum);