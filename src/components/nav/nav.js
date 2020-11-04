import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Fade from '../fade/fade'
import './nav.scss'

const Nav = () => {
    const data = useStaticQuery(graphql`
        query Images{
            image: file(relativePath: {eq: "nav-logo.png"}) {
                id
                childImageSharp {
                  fixed(width: 60){
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)
    console.log(data)

    return (
        <div className='nav'>
            <Fade style={{ position: 'fixed' }} />
            <div className='nav-links'>
                <Link to='/#landing'>
                    <Img
                        fixed={data.image.childImageSharp.fixed}
                        alt="Heartbreak Social Club Logo"
                        className="nav-logo"
                    />
                </Link>
                <ul>
                    <li><Link to='/#designs' style={{ color: '#999', textDecoration: 'none' }}>DESIGNS</Link></li>
                    <li><Link to='/#artists' style={{ color: '#999', textDecoration: 'none' }}>ARTISTS</Link></li>
                    <li><Link to='#' style={{ color: '#999', textDecoration: 'none' }}>CONTACT</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav