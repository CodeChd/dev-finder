import axios from "axios"
import { useEffect, useState } from "react";
import { createContext } from 'react';

const githubContext = createContext();



export const Context = ({children}) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() =>{
    searchUsers()
  },[user])
  
  const searchUsers = async data => {
    setLoading(true)
    
    const url = `https://api.github.com/users/CodeChd`
    
    const res = await axios.get(url)

    
    console.log(res)
    
    setUser(res.data)
  
     setLoading(false)
  
  
}
  
  
  return (
    <githubContext.Provider
    value={{
      searchUsers,
      user,
      loading
    }}
  >
    {children}
  </githubContext.Provider>
  )
}
export default githubContext