import React from "react";

function Links(props){
    return (
        <div id="links">
        <h3>Links</h3>
        <a>{props.links.github}</a>
        <a>{props.links.linkedin}</a>
        </div>
    )
}

export default Links;