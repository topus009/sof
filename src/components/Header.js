import React from 'react';
import inc from '../images/sort_inc.png';
import desc from '../images/sort_desc.png';

export default function Header({toggleSort, order}) {
  return (
    <div className='header'>
      <div
        className='sort'
        onClick={() => toggleSort()}>
        <img
          src={order === 'asc' ? inc : desc }
          alt='sort'/>
        <span className='sort_title'>
          {order === 'asc' ? 'По возрастанию' : 'По убыванию' }
        </span>
      </div>
    </div>
  )
}