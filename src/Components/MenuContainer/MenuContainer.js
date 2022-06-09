import React from 'react';
import './MenuContainer.css'

function MenuContainer({ icon, link , isHome}) {
    return (
        // <li>
        <li className={isHome ? `active` : ``}>
            <a href={link}>
                <span className="icon">{icon}</span>
            </a>
        </li>
    )
}

export default MenuContainer