import React from 'react';

function Icon({color,size,children}){
  return(
      <svg
        fill = {color}
        height = {size}
        width = {size}
        viewBox= "0 0 32 32"
        >
        {children}
      </svg>
  )
}
export default Icon;
