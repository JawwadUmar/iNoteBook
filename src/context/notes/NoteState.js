import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesIntial = [];
  const [notes, setNotes] = useState(notesIntial);

    //GET ALL NOTES
    const getNotes = async ()=>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNjQ3MjhjY2M3ZDJjNjg3Yjk3YzJiIn0sImlhdCI6MTY5MTk2MDczM30.BFnUZurlF4vDQjTRbeZgCfbqhzz8D1Rq3WFZRcVb9M4"
        },
      });

      const json = await response.json();
      console.log(json);
      setNotes(json);
    }





  //ADD A NOTE
  const addNote = async (title, description, tag)=>{
    //API call to be done
    //API CALL
    const response = await fetch( `${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNjQ3MjhjY2M3ZDJjNjg3Yjk3YzJiIn0sImlhdCI6MTY5MTk2MDczM30.BFnUZurlF4vDQjTRbeZgCfbqhzz8D1Rq3WFZRcVb9M4"
      },
      body: JSON.stringify({title, description, tag}), //ERROR HERE
    });

    // const json = response.json();

    console.log("Adding a new Note");
    const note = {
      _id: "64d945ca28c5d0fefefef615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    };

    setNotes(notes.concat(note));
  }

  //DELETE A NOTE

  const deleteNote = (id)=>{
    //API call to be done
    console.log("deleting the note with id " + id)
    const newNotes = notes.filter((note) =>{return note._id !==id});
    setNotes(newNotes);
  }

  //EDIT A NODE
  const editNote = async(id, title, description, tag)=>{

    //API CALL
    const response = await fetch( `${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNjQ3MjhjY2M3ZDJjNjg3Yjk3YzJiIn0sImlhdCI6MTY5MTk2MDczM30.BFnUZurlF4vDQjTRbeZgCfbqhzz8D1Rq3WFZRcVb9M4"
      },
      body: JSON.stringify({title, description, tag}), //ERROR HERE
    });

    const json = response.json();


    //LOGIC TO EDIT
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
      
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
