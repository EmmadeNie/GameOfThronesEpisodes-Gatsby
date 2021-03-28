import React from "react"
import {generateSeasonLink, generateSeasonLinkSmallScreen} from "../utils/generateLinks";
import title from "../media/title.jpg"

const Header=()=>{
    const mobileScreen = window.screen.width < 650

    console.log(mobileScreen)

    return <header><div><img src={title} alt={"title"} height={"auto"} width={"100%"}/></div><nav><ul>
        { mobileScreen ?
            [1,2,3,4,5,6,7,8].map(number=> generateSeasonLinkSmallScreen(number)) : [1,2,3,4,5,6,7,8].map(number=> generateSeasonLink(number))
        }
    </ul></nav></header>
}

export default Header