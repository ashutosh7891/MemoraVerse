    import React, { useState } from "react";
    import Header from "./Header";
    import Footer from "./Footer";
    import Note from "./Note";
    import CreateArea from "./CreateArea";

    function App() {

        const [notes , setNotes] = useState([]);

        const addNotes = (newNote) => {
            setNotes(prevNotes => {
                return [...prevNotes , newNote]
            })
        }


        const addNote = (note) => {
                console.log(note);
        }

        const deleteNote = (id) => {

            setNotes(prevNotes => {
                return prevNotes.filter((noteItem , index) => {

                    return index !== id;

                })
            })

        }

    return (
        <div>
        <Header />
        <CreateArea
        onAdd = {addNotes}
        />

            {notes.map((noteItem  , index) => {
                return <Note 
                key = {index}
                id = {index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote}
                />
            })}

        
        <Footer />
        </div>
    );
    }

    export default App;


