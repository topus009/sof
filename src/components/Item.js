import React from 'react';
import moment from 'moment';

export default function Item({title, logo, link, date}) {
  const time = moment.utc(date, 'X').format('YYYY MMM dddd HH:mm:ss');
  return (
    <div className='item'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='date'>{time}</div>
      <a className='link' href={link} target='_blank'>{title}</a>
    </div>
  )
};