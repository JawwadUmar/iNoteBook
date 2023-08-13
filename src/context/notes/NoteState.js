import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState =(props) =>{
    const s1 = {
        "name": "jae",
        "class": "5b"
    }

    const [state, setState] = useState(s1);
    const update= () =>{
        setTimeout(() => {
            setState({
                "name" : "Larry",
                "class": "10b"
            })
        }, 1000)
    }
    return(
        <NoteContext.Provider value= {{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;