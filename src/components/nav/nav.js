import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Scrollspy from "react-scrollspy"

import Scroll from "../scroll"
import Fade from "../fade/fade"
import "./nav.scss"
import { element } from "prop-types"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "nav-logo.png" }) {
        id
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="nav-wrapper">
      <Fade style={{ position: "fixed" }} />
      <nav className="nav-links">
        <Scrollspy
          items={["landing", "designs", "artists", "contact"]}
          currentClassName="is-active"
          offset={-300}
          onUpdate={currentEl => {
            // Remove active class from elements off-screen
            var nonActiveElems = document.querySelectorAll(".is-active")
            nonActiveElems.forEach(elem => {
              //For all elems except current elem
              if (elem.id != currentEl.id + "-link") {
                elem.classList.remove("is-active")
                elem.className = "non-active"
              }
            })

            var currentElRef = document.getElementById(currentEl.id + "-link")
            currentElRef.classList.remove("non-active")
            currentElRef.className = "is-active"
          }}
        >
          <li className="img-link" id="img-link">
            <Scroll type="id" element="landing">
              <a href="#" id="landing-link">
                <Img
                  fixed={data.image.childImageSharp.fixed}
                  alt="Heartbreak Social Club Logo"
                  id="nav-logo"
                />
              </a>
            </Scroll>
          </li>
          <div id="text-link-wrapper">
            <li className="text-link">
              <Scroll type="id" element="designs">
                <a href="#" className="link" id="designs-link">
                  DESIGNS
                </a>
              </Scroll>
            </li>
            <li className="text-link">
              <Scroll type="id" element="artists">
                <a href="#" className="link" id="artists-link">
                  ARTISTS
                </a>
              </Scroll>
            </li>
            <li className="text-link">
              <Scroll type="id" element="contact">
                <a href="#" className="link" id="contact-link">
                  CONTACT
                </a>
              </Scroll>
            </li>
          </div>
        </Scrollspy>
      </nav>
    </div>
  )
}

export default Nav
