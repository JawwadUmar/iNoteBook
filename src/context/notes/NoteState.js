import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesIntial = [
    {
      _id: "64d9452028c5d0dgf615152c7d",
      user: "64d64728ccc7d2c687b97c2b",
      title: "We are working with this note",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:03:28.796Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0fgr615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "This is second note man",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0egf615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5hhd0f615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0f61jt5152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0f61515rw2c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0f615152fdc84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0f615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
    {
      _id: "64d945ca28c5d0fefefef615152c84",
      user: "64d64728ccc7d2c687b97c2b",
      title: "Why are you like this",
      description: "let's try and find",
      tag: "there is no tag",
      date: "2023-08-13T21:06:18.131Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesIntial);

  //ADD A NOTE
  const addNote = (title, description, tag)=>{
    //API call to be done
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

  }

  //EDIT A NODE
  const editNote = (id)=>{

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
