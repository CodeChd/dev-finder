import "./App.css";
import sun from "../public/assets/icon-sun.svg";
import moon from "../public/assets/icon-moon.svg";
import SearchIcon from "../public/assets/icon-search.svg";
import twitter from "../public/assets/icon-twitter.svg";
import company from "../public/assets/icon-company.svg";
import link from "../public/assets/icon-website.svg";
import location from "../public/assets/icon-location.svg";
import { useEffect, useState } from "react";

function App() {
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

      <form>
        <img src={SearchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Github Username" />
        <button className="btn">Search</button>
      </form>

      <main className="content">
        <div className="circle">
          <img src="/assets/octocat.png" alt="" />
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

          <div className="profile_social">
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
                <img src={location} alt="location-icon" />{" "}
                <span>San Francisco</span>{" "}
              </p>
              <p>
                <img src={link} alt="link-icon" />
                <span>https://github.blog</span>{" "}
              </p>
            </div>
            <div className="desc-2">
              <p>
                <img className="twitter" src={twitter} alt="twitter-icon" />
                <span>Not available</span>{" "}
              </p>
              <p>
                <img src={company} alt="building-icon" />
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
