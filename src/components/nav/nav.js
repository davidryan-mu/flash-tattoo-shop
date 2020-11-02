import React from 'react'
import { Link } from 'gatsby'

import './nav.scss'

const Nav = ({data}) => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to='#' style={{ color: '#999', textDecoration: 'none' }}>DESIGNS</Link></li>
                <li><Link to='#' style={{ color: '#999', textDecoration: 'none' }}>ARTISTS</Link></li>
                <li><Link to='#' style={{ color: '#999', textDecoration: 'none' }}>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Nav