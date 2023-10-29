import React, { useEffect, useState } from 'react'
import CreateNote from './CreateNote';

const Home = () => {

  
    const [notes, setNote]= useState([]);

  const noteList =()=>{
    fetch("https://brave-red-girdle.cyclic.app/notes/",{
        method:"GET",
        headers:{
          "Content-type":"application/json",
          authorization:`Bearer ${localStorage.getItem("token")}`
        }
      }).then((res)=>res.json()).then((data)=>{
          // console.log(data);
          setNote(data)
      }).catch((err)=>console.log(err))
  }
    useEffect(()=>{
      noteList()
    },[])

    const deleteNote = (id)=>{
    //  alert(id);
     
        fetch(`https://brave-red-girdle.cyclic.app/notes/delete/${id}`,{
          method:"DELETE",
          headers:{
            "Content-type":"application/json",
            authorization:`Bearer ${localStorage.getItem("token")}`
          }
        }).then((res)=>res.json()).then((data)=>{
        noteList()
        console.log(data)
        }).catch(err=>console.log(err))
        
      
    }
  return (
    <div>
      <div style={{margin :"50px"}}>
        <CreateNote noteList={noteList} />
      </div>
      
        {notes?.map((note)=>(
          <div key={note._id} style={{width:"200px",border:"1px solid black",margin:"auto"}}>
            <h3>{note.title}</h3>
            <h3>Username: {note.username}</h3>
            <p>{note.body}</p>
            
            {/* <button onClick={()=>(<Edit />)}>Edit</button> */}
            <button onClick={()=>deleteNote(note._id)}>Delete</button>

          </div>
        ))}
    </div>
  )
}

export default Home