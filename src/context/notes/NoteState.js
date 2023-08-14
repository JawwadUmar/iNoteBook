import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState =(props) =>{
   
    const notesIntial = 
        [
            {
              "_id": "64d9452028c5d0f615152c7d",
              "user": "64d64728ccc7d2c687b97c2b",
              "title": "We are working with this note",
              "description": "let's try and find",
              "tag": "there is no tag",
              "date": "2023-08-13T21:03:28.796Z",
              "__v": 0
            },
            {
              "_id": "64d945ca28c5d0f615152c84",
              "user": "64d64728ccc7d2c687b97c2b",
              "title": "We are working with this note",
              "description": "let's try and find",
              "tag": "there is no tag",
              "date": "2023-08-13T21:06:18.131Z",
              "__v": 0
            }
          ]
    

    const [notes, setNotes] = useState(notesIntial)
    return(
        <NoteContext.Provider value= {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;