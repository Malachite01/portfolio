import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import arrowCircleUp from "../../img/arrow_circle_up.svg";

const GoBackUp = () => {
  return (
    <div className="go-back-up-component" data-testid='go-back-up-component'>
      <AnchorLink href="#top">
        <svg className="go-back-up-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
          <path d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
        </svg>
      </AnchorLink>
    </div>
  );
}
 
export default GoBackUp;