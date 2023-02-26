const letters = ['a', 'b', 'c'];

//array.forEach(function(element, index, array))
letters.forEach(element => console.log('foreach',element));
//vs
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log('for',element);
}

const products = [
    { title: 'Burger', price: 121 },
    { title: 'Pizza', price: 20 },
    { title: 'Soda', price: 5 },
  ]

  console.log('Primer Producto',products[0].title, 'Precio ', products[0].price )
  
  
  //<div id="app"></div> html
  const app = document.getElementById('app')
  
  products.forEach(product => {
    app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
  })