import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [];
  const [notes, setnotes] = useState(notesinitial);

  
  //fetch all notes from database
  const getnotes = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchdata`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    setnotes(json);
  };

  //add a note
  const addnotes = async (name,mobile,gender, email) => {
    //api call
    const response = await fetch(`${host}/api/notes/createdata`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,mobile,gender,email})
    });

    const note = await response.json();
    setnotes(notes.concat(note));
  };


  return (
    <NoteContext.Provider value={{ notes, setnotes, addnotes, getnotes  }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;