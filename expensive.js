const items = [
{name:'Bike', price: 100},
{name:'TV', price: 200},
{name:'Album', price: 10},
{name:'Book', price: 5},
{name:'Price', price: 100},
{name:'Computer', price: 1000},
]

let maximum = -infinity

for(let item of items){
	if (item > maximum)
      maximum = item

};

console.log("Exipensive item ", maximum);