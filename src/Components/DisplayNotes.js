import React, {useState, useEffect} from 'react'
import { getDatabase, ref, child, get } from 'firebase/database';

const DisplayNotes = () => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'notes/')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    


  return (
    <>
        <div>

        </div>
    </>
  )
}

export default DisplayNotes