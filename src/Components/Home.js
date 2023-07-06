import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase'
import {getDatabase, ref, set} from 'firebase/database'
import {v4 as u} from 'uuid'
import DisplayNotes from './DisplayNotes';

const Home = () => {

    const unique = u();

    const [img, setImg] = useState("");
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDesc, setNoteDesc] = useState("");
    const [tagValue, setTagValue] = useState("");

    // const database = getDatabase();

    const currentUser = useAuth();
    const navigate = useNavigate();
    if(!currentUser){
        navigate('/')
    }

    function createNote() {
        // const firebaseRef = firebase.database().ref('notes');
        console.log(noteTitle, noteDesc, tagValue);
        // firebaseRef.push(noteTitle)
        

        const db = getDatabase();
        set(ref(db, `notes ` + unique),{
            imgUrl: img,
            title: noteTitle,
            description: noteDesc,
            tag: tagValue,
        });
        setImg("")
        setNoteTitle("")
        setNoteDesc("")
        setTagValue("")
    }

  return (
    <>
        home screen

        <div>
            <div>
                <input type="file" /> <br />
                <button>Upload</button>
            </div>
            <div>
                <input type="text" placeholder='Enter note title' value={noteTitle} onChange={e => setNoteTitle(e.target.value)}/>
            </div>
            <div>
                <textarea name="" id="" cols="20" rows="10" placeholder='Enter notes description' value={noteDesc} onChange={e => setNoteDesc(e.target.value)}></textarea>
            </div>
            <div>
                <input type="text" placeholder='Enter note tag' value={tagValue} onChange={e => setTagValue(e.target.value)}/>
            </div>
            <div>
                <button onClick={() => createNote()}>Add note</button>
            </div>
        </div>


<br />
<br />
<br />
        {/* display */}
        displaying notes
        <div>{
            <DisplayNotes />
        }</div>
    </>
  )
}

export default Home