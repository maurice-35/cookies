import { useState } from 'react'

const App = () => {
  // A variable called times that starts at 0
  // A function called setTimes that updates times
  const [times, setTimes] = useState(0);
  const [removeTenCookies, setRemoveTenCookies] = useState(0)
  const [removeTwentyCookies, setRemoveTwentyCookies] = useState(0)
  const [removeThirtyCookies, setRemoveThirtyCookies] = useState(0)

  const handleClick = (event) => {
    event.preventDefault();
    let newNumber = times + 1;
    setTimes(newNumber)
  }

  const handleClickTen = (event) => {
    event.preventDefault();
    let tenRemovedCookies = times - 10;
    if(times - 10 < 1) {
      alert('Invalid! Please buy more cookies.')
    } else {
    setRemoveTenCookies()
    setTimes(tenRemovedCookies)
  }
}

  const handleClickTwenty = (event) => {
    event.preventDefault();
    let twentyRemovedCookies = times - 20;
    if(times - 20 < 1) {
      alert('Invalid! Please buy more cookies.')
    } else {
    setRemoveTwentyCookies()
    setTimes(twentyRemovedCookies)
  }
}

  const handleClickThirty = (event) => {
    event.preventDefault();
    let thirtyRemovedCookies = times - 30;
    if(times - 30 < 1) {
      alert('Invalid! Please buy more cookies.')
    } else {
    setRemoveThirtyCookies()
    setTimes(thirtyRemovedCookies)
  }
}

  return (
    <div className="Cookie">
      <header className="App-header">
        <h1>You have clicked {times} cookie{times > 1 ? "s" : ""}</h1>
        Click to add cookies
        <button id="cookie-image" onClick={handleClick}>
          <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1661953725/cookie_dp7lsv.png" alt="cookie"
          />
        </button>
      </header>
      <div className="buttons">
        <div><button onClick={handleClickTen} {...removeTenCookies}>10</button></div>
        <div><button onClick={handleClickTwenty} {...removeTwentyCookies}>20</button></div>
        <div><button onClick={handleClickThirty} {...removeThirtyCookies}>30</button></div>
      </div>
    </div>
  );
}

export default App;


