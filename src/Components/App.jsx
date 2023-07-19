import React, { useState } from "react";
import "../public/styles.css"
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App()
{

    const [notes,setNote]=useState([]);
    function addNotes(item)
    {
        setNote(prevNotes => {
            return [...prevNotes, item];
        });

    }
    function deleteNode(id)
    {
        setNote(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }
    return <div>
    <Header />
    <CreateArea key="1" addNotes={addNotes}/>
        {notes.map((x, index) => <Note key={index} id={index} title={x.title} content={x.content} deleteNode={deleteNode} />)}
     <Footer/></div>;
}
export default App;