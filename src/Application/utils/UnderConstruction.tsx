import React from 'react';

import construction from '../../img/construction.jpg';
import close from '../../img/close.svg';

const UnderConstruction = () => {
  return (
    <div className='under-construction'>
      <img src={construction} alt="site en cours de construction" />
      <div>
        <h2>En construction</h2>
        <p>Vous arrivez trop tôt ! Le site de Caraman Optique est en cours de construction !</p>
      </div>
      <button onClick={
        () => {
          document.getElementsByClassName('under-construction')[0].remove();
        }
      }>
        <img src={close} alt="icone de croix" />
      </button>
    </div>
  );
}
 
export default UnderConstruction;