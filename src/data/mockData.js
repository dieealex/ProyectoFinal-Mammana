const products = [
    { id: '1', title: 'Camiseta Argentina', category: 'camisetas', price: 20000, image: '/img/camiseta-arg.png' },
    { id: '2', title: 'Botines Nike', category: 'botines', price: 35000, image: '/img/botines-nike.png' },
    { id: '3', title: 'Pelota Adidas', category: 'pelotas', price: 15000, image: '/img/pelota-adidas.png' },
    // Más productos...
  ]
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000)
    })
  }
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000)
    })
  }
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.filter(prod => prod.category === category)), 1000)
    })
  }  