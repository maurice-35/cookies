import { useState } from 'react'

const App = () => {
  // A variable called times that starts at 0
  // A function called setTimes that updates times
  const [times, setTimes] = useState(0);
  const [removeCookies, setRemoveCookies] = useState(0)

  const handleClick = (event) => {
    event.preventDefault();
    let newNumber = times + 1;
    setTimes(newNumber)
  }

  const handleClickedCookies = (event) => {
    event.preventDefault();
    let cookiesRemoved = times - 10;
    setRemoveCookies()
    setTimes(cookiesRemoved)
  }

  return (
    <div className="Cookie">
      <header className="App-header">
        <h1>You have clicked {times} cookie{times > 1 ? "s" : ""}</h1>
        Click to adds
        <button id="cookie-image" onClick={handleClick}>
          <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1661953725/cookie_dp7lsv.png" alt="cookie"
          />
        </button>
      </header>
      <div className="buttons">
        <div><button onClick={handleClickedCookies} {...removeCookies}>10</button></div>
        <div><button>20</button></div>
        <div><button>30</button></div>
      </div>
    </div>
  );
}

export default App;
