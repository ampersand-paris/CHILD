import { BrowserRouter as Router,
    Routes,
    Route } from "react-router-dom";
    
  function Landing() {
  
    document.addEventListener('mousemove', function(e) {
      let body = document.querySelector('body');
      let circle = document.getElementById('circle');
      let left = e.offsetX;
      let top = e.offsetY;
      circle.style.left = left + 'px';
      circle.style.top = top + 'px';
    });
    
  
    return (
      <>
        <div className="container">
          <div id="circle"></div>
          {/* <div className="margin--block--left">
          </div> */}
          <div className="t--shirt">
            <div className="button">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-tGogYumelRWhEY_4cUTK8j-YRMQBuc3JRK6t6ysvU7fi5g/viewform?usp=sf_link"><h1>BUY YOUR T-SHIRT NOW</h1></a>
            </div>
            <img id="img" className="image" src="/T-shirt.png" />
            <p>Artwork by Alexis Gallo.</p>
          </div>
          {/* <div className="margin--block--right">
            
          </div> */}
        </div>
      </>
    );
  }
  
  export default Landing;
  