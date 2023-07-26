import React from 'react'
import watch from './../Image/watch.png';
import bag from './../Image/bag.png';
import shoes from './../Image/shoes.png';
import './../Style/Category.css'


function Category() {
    const categoryList = [{ id: 1, name: 'Whatch', image: watch, bg: 'linear-gradient(to right, #FFA039 , #FDCF1A)' },
    { id: 2, name: 'Bag', image: bag, bg: 'linear-gradient( #FE1A72, #FD1972)' },
    { is: 3, name: 'Shoes', image: shoes, bg: 'linear-gradient(to right,  #468DF9 , #0FF0C8)' }]
    return (
        <div className='cat-cntnr'key={"category-item"}>
            {categoryList.map(item =>
                <div key={item.id} style={{ backgroundImage: item.bg }} className='cat-item'>
                    <div className='item-text'>{item.name}</div>
                    <div><img src={item.image} width={50} alt={item.name}></img></div>
                </div>
            )}
        </div>
    )
}

export default Category
