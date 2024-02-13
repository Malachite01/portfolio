import React from 'react';

import refractor1 from '../../img/refractor/refractor (1).png';
import refractor2 from '../../img/refractor/refractor (2).png';
import refractor3 from '../../img/refractor/refractor (3).png';
import refractor4 from '../../img/refractor/refractor (4).png';
import refractor5 from '../../img/refractor/refractor (5).png';

const RefractorHead = () => {
  return (
    <div className='refractor-head'>
      <div className='refractor-head-container-left'>
        <img src={refractor4} alt='refractor head' />
        <img src={refractor2} alt='refractor head' />
      </div>
      <img src={refractor5} alt='refractor head' id='refractor-center' />
      <div className='refractor-head-container-right'>
        <img src={refractor3} alt='refractor head' />
        <img src={refractor1} alt='refractor head' />
      </div>
    </div>
  );
}
 
export default RefractorHead;