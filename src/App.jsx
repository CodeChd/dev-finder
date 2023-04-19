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

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function App() {
  const githubContext = useContext(Context);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);
    document.querySelector(".toggle_btn").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text === " ") {
      console.log("Hello Senpai enter some input");
    } else {
      githubContext.searchUsers(text);
      setText("");
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
        <input
          className={`${theme === "dark" ? "input_light" : null} search_icon`}
          value={text}
          type="search"
          placeholder="Search Github Username"
          onChange={onChange}
        />
        <div className="right_component">
        <p className={`${githubContext.user.message === "Not Found" ? "input_error" : "enable"}`}>No Results</p>
        <button className="btn" onClick={onSubmit}>
          Search
        </button>
        </div>
      </form>

      <main className={`${theme === "dark" ? "light_content" : null} content`}>
        <div className="details">
          <div className="description">
            <img
              className="circle"
              src={
                !githubContext.user.avatar_url
                  ? "/assets/octocat.png"
                  : githubContext.user.avatar_url
              }
              alt=""
            />

            <div className="names">
              <div className="suname">
                <h1 className={theme === "dark" ? "light_name" : null}>
                  {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                    ? "Octocat"
                    : githubContext.user.login === "" 
                    ? "Octocat" : githubContext.user.login}
                </h1>
                <p className="social-at">
                  @
                  {!githubContext.user.login
                    ? "octocat"
                    : githubContext.user.login}
                </p>
              </div>

              <div className="date">
                <p>
                  Joined{" "}
                  {!githubContext.user.created_at
                    ? " Jan"
                    : months[
                        githubContext.user.created_at
                          .split("T")
                          .shift()
                          .split("-")[1] - 1
                      ]}{" "}
                  {!githubContext.user.created_at
                    ? " 25"
                    : githubContext.user.created_at
                        .split("T")
                        .shift()
                        .split("-")[2]}{" "}
                  {!githubContext.user.created_at
                    ? " 2011"
                    : githubContext.user.created_at
                        .split("T")
                        .shift()
                        .split("-")[0]}{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="bio">
            {!githubContext.user.bio
              ? "This profile has no bio"
              : githubContext.user.bio}
          </p>

          <div
            className={`${
              theme === "dark" ? "light_social" : null
            } profile_social`}
          >
            <p>
              Repos
              <span>
                {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                  ? "8  "
                  : githubContext.user.public_repos === null 
                  ? "N/A"
                  : githubContext.user.public_repos}
              </span>
            </p>
            <p>
              Followers
              <span>
                {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                  ? "3839"
                  : githubContext.user.followers === null
                  ? "N/A"
                  : githubContext.user.followers}
              </span>
            </p>
            <p>
              Following
              <span>
                {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                  ? "9"
                  : githubContext.user.following === null
                  ? "N/A"
                  : githubContext.user.following}
              </span>
            </p>
          </div>

          <div className="footer-content">
            <div className="desc-1">
              <p>
                <img
                  className={`${theme === "dark" ? "img_light" : null}`}
                  src={location}
                  alt="location-icon"
                />
                <span>
                  {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                    ? "San Francisco"
                    : githubContext.user.location === null
                    ? "Not Available"
                    : githubContext.user.location}
                </span>
              </p>
              <p>
                <img
                  className={`${theme === "dark" ? "img_light" : null} link`}
                  src={link}
                  alt="link-icon"
                />
                <span>
                  {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                    ? "https://github.blog"
                    : githubContext.user.blog === ""
                    ? "Not Available"
                    : githubContext.user.blog}{" "}
                </span>
              </p>
            </div>
            <div className="desc-2">
              <p>
                <img
                  className={`${theme === "dark" ? "img_light" : null} twitter`}
                  src={twitter}
                  alt="twitter-icon"
                />
                <span>
                  {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                    ? "Not Available"
                    : githubContext.user.twitter_username === null
                    ? "Not Available"
                    : githubContext.user.twitter_username}
                </span>
              </p>
              <p>
                <img
                  className={`${theme === "dark" ? "img_light" : null}`}
                  src={company}
                  alt="building-icon"
                />
                <span>
                  {githubContext.user.length  === 0 || githubContext.user.message === "Not Found" 
                    ? "@github"
                    : githubContext.user.company === null
                    ? "Not Available"
                    : githubContext.user.company}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
