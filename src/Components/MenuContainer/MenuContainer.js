import React from 'react';
import './MenuContainer.css'

function MenuContainer({icon, link}) {
  return (
    <li>
        <a href={link}>
            <span className="icon">{icon}</span>
        </a>
    </li>
  )
}

export default MenuContainer