import React from "react"
import {Link} from "gatsby";

const Home = ()=> {

    const generateSeasonLink = ( number ) =>
            <li key={number} className="day_link">
                <Link to={`/Season${number}`}>
                    Season {number}
                </Link>
            </li>
    return <div><h1>This is the Homepage</h1>
        <ul>
        { [1,2,3,4,5,6,7,8,9,10].map(number=>
            generateSeasonLink(number)
        )}
    </ul></div>
}

export default Home