import logo from './logo.svg';
import './App.css';

import appHeight from './appHeight';

function App() {

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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-tGogYumelRWhEY_4cUTK8j-YRMQBuc3JRK6t6ysvU7fi5g/viewform?usp=sf_link"><h1>ORDER NOW</h1></a>
          </div>
          <img id="img" className="image" src="/T-shirt.png" />
        </div>
        {/* <div className="margin--block--right">
          
        </div> */}
      </div>
      
    </>
  );
}

export default App;
