import React from "react";
import "../public/styles.css";
function Note(props)
{
    function hadndleClick()
    {
        props.deleteNode(props.id);
    }

    return <div className="note">
        <h1> {props.title}</h1>
        <p>{props.content}</p>
        <button onClick={hadndleClick   }>Delete</button>
       
    </div>;

}
 export default Note;
