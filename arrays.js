const masen = [4, 5, 3, 5, 2, 4, 5, 3]
const sumi = masen.reduce((acc, number) => acc + number, 0)
const arigato = sumi / masen.length
console.log (arigato.toFixed(2))

const grr = masen.filter(masen => masen > 3).map(masen => `Оценка: ${masen}`).join(", ")
console.log(grr)

const frr = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sort = frr.sort().join(", ")
console.log(sort)

const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const z = products.filter(products  => products.price < 10000)
console.log(z)

console.log("Названия товаров: ", products.map(products => products.name).join(", "))

const sum = products.map(products => products.price).reduce((acc, current) => acc + current)
console.log("Сумма: ", sum)

const suma = [12, 45, 7, 33, 18]
const x = suma.some(suma => suma > 40)
const y = suma.every(suma => suma > 5)
console.log(x, y)