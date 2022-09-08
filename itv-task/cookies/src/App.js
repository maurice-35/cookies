import React, { useState } from 'react';


const App = () => {

  // A variable called times that starts at 0
  // A function called setTimes that updates times

  const [times, setTimes] = useState(0);
  const [removeTenCookies, setRemoveTenCookies] = useState(0);
  const [removeTwentyCookies, setRemoveTwentyCookies] = useState(0);
  const [removeThirtyCookies, setRemoveThirtyCookies] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    let newNumber = times + 1;
    setTimes(newNumber);
  }

  const handleClickTen = (event) => {
    event.preventDefault();
    const tenRemovedCookies = times - 10;
    if (times - 10 < 0) {
      alert('Invalid! Please buy more cookies.')
    } else {
      setRemoveTenCookies();
      setTimes(tenRemovedCookies);
    };
  }

  const handleClickTwenty = (event) => {
    event.preventDefault();
    let twentyRemovedCookies = times - 20;
    if (times - 20 < 0) {
      alert('Invalid! Please buy more cookies.')
    } else {
      setRemoveTwentyCookies();
      setTimes(twentyRemovedCookies);
    };
  }

  const handleClickThirty = (event) => {
    event.preventDefault();
    let thirtyRemovedCookies = times - 30;
    if (times - 30 < 0) {
      alert('Invalid! Please buy more cookies.')
    } else {
      setRemoveThirtyCookies();
      setTimes(thirtyRemovedCookies);
    };
  }


  return (
    <section className="containers">
      <section className="container1">
        <div className="Cookie">
          <header className="App-header">
            <h1>You have clicked {times} cookie{times > 1 ? "s" : ""}</h1>
            <p>Click to add cookies</p>
            <div className="image">
              <button id="cookie-image" onClick={handleClick}>
                <img src="https://thumbs.gfycat.com/BiodegradableBlueClumber.webp" alt="cookie"
                />
              </button>
            </div>
          </header>
          <div className="buttons">
            <div><button onClick={handleClickTen} {...removeTenCookies}>10</button></div>
            <div><button onClick={handleClickTwenty} {...removeTwentyCookies}>20</button></div>
            <div><button onClick={handleClickThirty} {...removeThirtyCookies}>30</button></div>
          </div>
        </div>
      </section>
      <section className="container2">
        <div className="Cookie">
          <header className="App-header">
            <div className="app-section2">
              <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="background"
              />
            </div>
          </header>
        </div>
      </section>
      <section className="container3">
        <div className="Cookie">
          <header className="App-header">
            <div className="app-section3">
              <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="background"
              />
            </div>
          </header>
        </div>
      </section>
    </section>
  );
}

export default App;

