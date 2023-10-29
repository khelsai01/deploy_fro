import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("");


  const register = async () => {
    const payload = {
      username,
      email,
      password
    }
    try {
      let res = await fetch("https://brave-red-girdle.cyclic.app/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload)
      })

      let data = await res.json();
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <br />
      <input type="text" value={username} placeholder='enter username' onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type="email" value={email} placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" value={password} placeholder='enter email' onChange={(e) => setPassword(e.target.value)} />
      <br />

      <button onClick={register}>Register</button>
    </div>
  )
}

export default Signup