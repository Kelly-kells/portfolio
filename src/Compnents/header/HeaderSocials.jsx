import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { AiFillTwitterSquare } from "react-icons/ai"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linked.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"> <BsGithub /></a>
            <a href="https://twitter.com" target="_blank"><AiFillTwitterSquare /></a>

        </div>
    )
}

export default HeaderSocials