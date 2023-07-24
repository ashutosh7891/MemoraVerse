import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';

function Note(props) {

    const handleClickEvent = () => {

        props.onDelete(props.id);
    }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClickEvent}>
        <Zoom in ={true}>
        <DeleteIcon />
        </Zoom>
      </button>
    </div>
  );
}

export default Note;