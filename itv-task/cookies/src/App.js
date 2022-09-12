import React, { useState, useEffect } from "react";

const App = () => {
  // A variable called times that starts at 0
  // A function called setTimes that updates times
  const [cookies, setCookies] = useState(0);
  const [helpers, setHelpers] = useState(0);

  const handleBuy = (price) => {
    if (cookies - price < 0) {
    } else {
      console.log("you bought a help");
      setHelpers(helpers + price);
      setCookies(cookies - price);
    }
  };

  const getHands = () => {
    let string = "";
    for (let i = 0; i < helpers; i++) {
      string = string + "🖐";
    }
    return string;
  };

  useEffect(() => {
    const add = setInterval(() => {
      setCookies(cookies + helpers);
    }, 1000);
    return () => clearInterval(add);
  }, [cookies, helpers]);

  return (
    <section className="containers">
      <section className="container1">
        <div className="Cookie">
          <header className="App-header">
            <h1>
              You have clicked {cookies} cookie{cookies > 1 ? "s" : ""}
            </h1>
            <p>Click to add cookies</p>
            <p>{getHands()}</p>
            <p className="helpers">
              You have
              <span>
                <strong>{helpers}</strong>
              </span>
              helpers
            </p>
            <div className="image">
              <button id="cookie-image" onClick={() => setCookies(cookies + 1)}>
                <img
                  src="https://thumbs.gfycat.com/BiodegradableBlueClumber.webp"
                  alt="cookie"
                />
              </button>
            </div>
          </header>
          <div className="buttons">
            <div>
              <button disabled={cookies < 1} onClick={() => handleBuy(1)}>
                1
              </button>
            </div>
            <div>
              <button disabled={cookies < 2} onClick={() => handleBuy(2)}>
                2
              </button>
            </div>
            <div>
              <button disabled={cookies < 3} onClick={() => handleBuy(3)}>
                3
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container2">
        <div className="Cookie">
          <header className="App-header">
            <div className="app-section2">
              <img
                src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="background"
              />
            </div>
            <span>
              {helpers >= 100 && <strong>👍🏾 Well Done! Keep On!</strong>}
            </span>
            <span>
              {helpers >= 200 && <strong>🤝 Brave Shark! Keep On!</strong>}
            </span>
            <span>
              {helpers >= 300 && <strong>🦾 Curious Tycoon! Keep On!</strong>}
            </span>
          </header>
        </div>
      </section>
      <section className="container3">
        <div className="Cookie">
          <header className="App-header">
            <div className="app-section3">
              <img
                src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="background"
              />
            </div>
          </header>
        </div>
      </section>
    </section>
  );
};

export default App;
