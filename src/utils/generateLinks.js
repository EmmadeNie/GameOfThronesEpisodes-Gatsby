import {Link} from "gatsby";
import React from "react";

const generateEpisodeLink = ( episode ) =>
    <li key={episode.id} className="day_link">
        <Link to={`/Season${episode.season}/${episode.id}/`}>
            Episode {episode.number} - {episode.name}
        </Link>
    </li>

export default generateEpisodeLink