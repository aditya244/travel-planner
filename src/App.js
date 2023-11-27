import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage';
import PlaceDetails from './pages/PlaceDetails';
import PlaceFinder from './pages/PlaceFinder';

// function App() {
//   return (
//     <div className="App">
//       <HomePage/>
//     </div>
//   );
// }

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/placeFinder" exact element={<PlaceFinder/>}/>
          <Route path="/placeDetails" exact element={<PlaceDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
