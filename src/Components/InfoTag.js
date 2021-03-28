import React from "react"

const InfoTag = ({title, content})=>{
    return<span style={{ display: "inline-table", margin: 5, padding: 5, borderLeft: "1px solid white"}}>
        <b>{title}: </b>{content}</span>
}

export default InfoTag