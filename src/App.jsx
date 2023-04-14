import "./App.css";
import SearchIcon from "../public/assets/icon-search.svg";

function App() {
  return (
    <div className="App">
      <header>
        <p>devfinder</p>
        <div className="Modes">
          <p>Light </p>
        </div>
      </header>

      <form>
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Search Github Username" />
        <button>Search</button>
      </form>

      <main className="content">
        <div className="circle"></div>

        <div className="details">
          <div className="description">
            <p>The Octocat</p>
            <p>@octocat</p>
            <p>This profile has no bio</p>
          </div>
          <div className="date">
            <p>Joined jan 25 2011</p>
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

          <div className="desc-1">
            <p>San Francisco</p>
            <p>https://github.blog</p>
          </div>
          <div className="desc-2">
            <p>Not available</p>
            <p>@github</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
