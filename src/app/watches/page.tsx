import React from 'react'

const watches = () => {

    const watchData = [
   { id: 1, name: 'Rolex', price: 12000, description: 'Lurury watch', image: '/rolex.JPEG'},
   { id: 2, name: 'Omega', price: 8000,  description: 'sporty design', image: '/omega.JPEG'},
   { id: 3, name: 'Patek Philippe', price: 25000, description: 'Elegant timepiece', image: '/Patek.JPEG'},
   { id: 4, name: 'Tag Heuer', price: 5000, description: 'sporty and stylish', image: '/tag-heuer.JPEG'},
   { id: 5, name: 'Breitling', price: 7000, description: 'Bold and rugged', image: '/breitling.JPEG'},
   { id: 6, name: 'Seiko', price: 1000, description: 'Affordable ane reliable', image: '/seikobg.JPEG'},
    ]


  return (
    <div>
       <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='.price'>${watch.price}</div>
            <button>Add to Cart</button>
            </div>
        ))}
       </div>
    </div>
  )
}

export default watches;