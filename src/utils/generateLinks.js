import {Link} from "gatsby";
import React from "react";

export const generateSeasonLink = ( number ) =>
    <li key={number} className="day_link">
        <Link to={`/Season${number}/`}>
            Season {number}
        </Link>
    </li>

export const generateSeasonLinkSmallScreen = ( number ) =>
    <li key={number} className="day_link">
        <Link to={`/Season${number}/`}>
            S {number}
        </Link>
    </li>

const generateEpisodeLink = ( episode ) =>
    <li key={episode.id} className="day_link">
        <Link to={`/Season${episode.season}/${episode.id}/`}>
            {episode.number} - {episode.name}
        </Link>
    </li>

export const generatePrevLink = ( episode ) =>
    <li key={episode.id} className="day_link">
        <Link to={`/Season${episode.season}/${episode.id}/`}>
            Previous Episode
        </Link>
    </li>

export const generateNextLink = ( episode ) =>
    <li key={episode.id} className="day_link">
        <Link to={`/Season${episode.season}/${episode.id}/`}>
            Next Episode
        </Link>
    </li>


export default generateEpisodeLink