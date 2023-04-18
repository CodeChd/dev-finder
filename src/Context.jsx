import axios from "axios"
import { useEffect, useState } from "react";
import { createContext } from 'react';
const githubContext = createContext();

const access_token = "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"



export const Context = ({children}) => {

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  

  
  const searchUsers = async data => {
    setLoading(true)
    
    const url = `https://api.github.com/users/${data}`
    
    try {

      const res = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }


      })

      setUser(res.data)
      
      setLoading(false)
    } catch (error) {

      console.log("no result")
      
    }
  
  
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