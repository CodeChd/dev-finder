import { useState } from "react";
import { createContext } from "react";
const githubContext = createContext();

const access_token = "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";

export const Context = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchUsers = async (data) => {
    setLoading(true);

    const url = `https://api.github.com/users/${data}`;

    await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setUser(response);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "No Result");
      });
  };

  return (
    <githubContext.Provider
      value={{
        searchUsers,
        user,
        loading,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};
export default githubContext;
