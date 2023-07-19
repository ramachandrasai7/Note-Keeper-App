import React, { useState } from "react";
import ReactDom from "react-dom/client";


function CreateArea(props)
{
    const [note, setNote] = useState({
        "title": "",
        "content": ""
    });

    function handleChange(event) {
        console.log(note);
        const { name, value } = event.target;
        setNote(PreVal => {

            return {...PreVal,
                [name]:value
            };
            // return PreVal;
        });

    }
    function submitedNote(event)
    {
        //
        props.addNotes(note);
        setNote({
            "title": "",
            "content": ""
        });
        event.preventDefault();
       
    } 
    return (
        <div>
            <form >
                <input onChange={handleChange} name='title' placeholder="Title" value={note.title}/>
                <textarea onChange={handleChange} name='content' placeholder="Take a Note..." rows='3' value={note.content}/>
                <button onClick={submitedNote}>Add</button>
            </form>
        </div>
    );
}
export default CreateArea;