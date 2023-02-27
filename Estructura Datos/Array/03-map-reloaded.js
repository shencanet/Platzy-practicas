const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santi",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
//console.log('original', orders)
const rta = orders.map(item => item.total)
//console.log('map', rta)


const rta2 = orders.map(item => {
    item.tax = .19; //añade campo al original 

    return item;
})

//console.log('rta2', rta2)
//console.log('original', orders)


const rta3 = orders.map(item => {
    
    
    return {
        ...item,
        tax: .20 //añade campo al una copia
    }
})



console.log('rta2', rta3)
console.log('original', orders)

export function addNewAttr(array) {

  
    return array.map(item => {
      return {
        ...item,
        taxes: Math.trunc(0.19 * (item.price))
      };
    });
  }; 

