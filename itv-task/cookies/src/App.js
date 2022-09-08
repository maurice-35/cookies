import React, { useState, useEffect } from 'react'

const App = () => {
  // A variable called times that starts at 0
  // A function called setTimes that updates times
  const [cookies, setCookies] = useState(0);
  const [helpers, setHelpers] = useState(0);


  const handleBuy = (price) => {
    if (cookies - price < 0) {
      alert('Invalid! Please buy more cookies.')
    } else {
      console.log("you bought a help");
      setHelpers(helpers + price);
      setCookies(cookies - price);
    }
  }


  return (
    <section className="containers">
      <section className="container1">
        <div className="Cookie">
          <header className="App-header">
            <h1>You have clicked {cookies} cookie{cookies > 1 ? "s" : ""}</h1>
            <p className="helpers">You have<span><strong>{helpers}</strong></span>helpers</p>
            <div className="image">
              <button id="cookie-image" onClick={() => setCookies(cookies + 1)}>
                <img src="https://thumbs.gfycat.com/BiodegradableBlueClumber.webp" alt="cookie"
                />
              </button>
            </div>
          </header>
          <div className="buttons">
            <div><button onClick={() => handleBuy(10)}>10</button></div>
            <div><button onClick={() => handleBuy(20)}>20</button></div>
            <div><button onClick={() => handleBuy(30)}>30</button></div>
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

