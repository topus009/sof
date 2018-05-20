import React from 'react';

const Item = ({title, logo, link, date}) => {
  /*
    @logo: url
    @ling: url
    @date: time in unix format
  */

  // formatting timestamp UNIX to UTC
  const d = new Date();
  d.setTime(date * 1000);

  const time = [
    d.toDateString(), // date_string
    d.toLocaleTimeString('ru', { hour12: false }), // time_string
  ];

  return (
    <div className='item'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='date'>{`${time[0]}______${time[1]}`}
      </div>
      <a className='link' href={link} target='_blank'>{title}</a>
    </div>
  )
}

export default Item;