const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 2100 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 150 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 210 },
    { name: 'Keyboard', price: 25 },
]


// FILTER ARRAY
const filteredItems = items.filter(item => {
    return item.price <= 100
}) 
console.log(filteredItems)

// MAP ARRAY
const itemNames = items.map(item => {
    return item.name
})

console.log(itemNames)

// FIND ARRAY
const foundItem = items.find(item => {
    return item.name === 'Album'
})

console.log(foundItem)

// FOR EACH
items.forEach(item => {
    console.log(item.name)
})