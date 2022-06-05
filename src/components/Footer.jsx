import React from 'react'

import { ImLinkedin2 } from 'react-icons/im'
import { AiFillGithub } from 'react-icons/ai'

export function Footer() {
  return (
    <footer>
        <div>
          by Caique De Brito
        </div>
        <div className="social-medias">
          <a href="https://www.linkedin.com/in/caiquedebrito/">
            <ImLinkedin2 />
          </a>
          <a href="https://github.com/caiquedebrito/random-quote-machine">
            <AiFillGithub />
          </a>
        </div>
      </footer>
  )
}
