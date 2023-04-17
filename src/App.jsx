import "./App.css";
import sun from "../public/assets/icon-sun.svg";
import moon from "../public/assets/icon-moon.svg";
import SearchIcon from "../public/assets/icon-search.svg";
import twitter from "../public/assets/icon-twitter.svg";
import company from "../public/assets/icon-company.svg";
import link from "../public/assets/icon-website.svg";
import location from "../public/assets/icon-location.svg";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

function App() {

  const githubContext = useContext(Context);

  // console.log(githubContext)




  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
    document.querySelector("header").setAttribute("data-theme", theme);
    document.querySelector(".toggle_btn").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };


  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === '' || text === ' ') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div className="App">
      <header>
        <p>devfinder</p>
        <div className="Modes">
          <button className="toggle_btn" onClick={toggleTheme}>
            {theme} <img src={theme === "light" ? sun : moon} alt="" />
          </button>
        </div>
      </header>

      <form className={`${theme === "dark" ? "search_light" : null}`}>
        <img src={SearchIcon} alt="search-icon" />
        <input className={`${theme === "dark" ? "input_light" : null}`} value={text} type="text" placeholder="Search Github Username" onChange={onChange} />
        <button className="btn" onSubmit={onSubmit} >Search</button>
      </form>

      <main className={`${theme === "dark" ? "light_content" : null} content`}>
        <div className="circle">
          {/* <img src={githubContext.user.avatar_url} alt="" />   */}
        </div>

        <div className="details">
          <div className="description">
            <div className="names">
              <h1>The Octocat</h1>
              <p className="social-at">@octocat</p>
              <p>This profile has no bio</p>
            </div>
            <div className="date">
              <p>Joined jan 25 2011</p>
            </div>
          </div>

          <div className={`${theme === "dark" ? "light_social" : null} profile_social`}>
            <p>
              Repos
              <span>8</span>
            </p>
            <p>
              Followers
              <span>3839</span>
            </p> 
            <p>
              Following
              <span>9</span>
            </p>
          </div>

          <div className="footer-content">
            <div className="desc-1">
              <p>
                <img className={`${theme === "dark" ? "img_light" : null}`} src={location} alt="location-icon" />{" "}
                <span>San Francisco</span>{" "}
              </p>
              <p>
                <img className={`${theme === "dark" ? "img_light" : null} link`} src={link} alt="link-icon" />
                <span>https://github.blog </span>{" "}
              </p>
            </div>
            <div className="desc-2">
              <p>
                <img className={`${theme === "dark" ? "img_light" : null } twitter`} src={twitter} alt="twitter-icon" />
                <span>Not available</span>{" "}
              </p>
              <p>
                <img className={`${theme === "dark" ? "img_light" : null}`} src={company} alt="building-icon" />
                <span>@github</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
