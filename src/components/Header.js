import React from 'react';
import inc from '../images/sort_inc.png';
import desc from '../images/sort_desc.png';

const Header = ({handle_sort, order}) => {
  /*
    @handle_sort: func
    @order: string
  */
  return (
    <div className='header'>
      <div
        className='sort'
        // toggle sorting items
        onClick={() => handle_sort()}
      >
        <img
          src={order === 'asc' ? inc : desc }
          alt='sort'
        />
        <span className='sort_title'>
          {order === 'asc' ? 'По возрастанию' : 'По убыванию' }
        </span>
      </div>
    </div>
  )
}

export default Header;