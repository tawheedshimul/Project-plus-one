import React from 'react'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

function MenuCategory({ items, title, img }) {
  return (
    <div className='pt-8'>
      {
        title && <Cover img={img} title={title}></Cover>
      }
      <div className='grid md:grid-cols-2 gap-10 mt-16 container mx-auto'>
        {
          items.map(item => <MenuItem
            key={item._id}
            item={item}
          ></MenuItem>)
        }
      </div>
    </div>
  )
}

export default MenuCategory;