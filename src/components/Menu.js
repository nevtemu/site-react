import React, { Component } from 'react'
import { ReactComponent as SvgGithub } from "../assets/github-square-brands.svg"
import { ReactComponent as SvgLinkedIn } from "../assets/linkedin-brands.svg"
import { ReactComponent as SvgTwitter } from "../assets/twitter-square-brands.svg"
import { ReactComponent as SvgReddit } from "../assets/reddit-square-brands.svg"
import { ReactComponent as SvgInstagram } from "../assets/instagram-square-brands.svg"

export default class menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menuText">Menu</div>
                <div className="social group">
                    <a href="https://github.com/nevtemu"><SvgGithub/></a>
                    <a href="https://www.linkedin.com/in/artem-soroka/"><SvgLinkedIn/></a>
                    <a href="https://twitter.com/artem_soroka_"><SvgTwitter/></a>
                    <a href="https://www.reddit.com/user/nevtemu"><SvgReddit/></a>
                    <a href="https://www.instagram.com/marichka_and_tyoma/"><SvgInstagram/></a>

                </div>
            </div>
        )
    }
}

//                 {socials.map(social=><Social key={social.id} {...social}></Social>)}
