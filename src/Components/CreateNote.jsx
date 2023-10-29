import React, { useState } from 'react'

const CreateNote = ({noteList}) => {
    const [title, setTitle] =useState("");
    const [body, setBody] = useState("");

    const createNote = async()=>{

        const payload ={
            title,
            body
        }

        try {
            let res = await fetch("https://brave-red-girdle.cyclic.app/notes/create",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(payload)
            });
            const data = await res.json();
            noteList()
            
        } catch (error) {
            console.log(error)
        }
    }
   

  return (
    <div>
        <input type="text" value={title} placeholder='enter title of note' onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <textarea type="text" value={body} placeholder='enter body of note' onChange={(e)=>setBody(e.target.value)} />
        <br/>
        <button onClick={createNote}>Create Note</button>

    </div>
  )
}

export default CreateNote
