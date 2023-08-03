import './app.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Banner from '../components/Banner/Banner.jsx';
import Header from '../components/Header/Header.jsx';
import Row from '../components/Row/Row.jsx';
import Trailer from '../components/Trailer/Trailer.jsx';
const apiKey = "1c6ceea1557e0ebe448c1f965f5cc09d";
const movieId = "603"; // The Matrix

function App(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Header/>} />
      </Routes>
        <Banner/>
        <Trailer movieId={movieId} apiKey={apiKey}/>
        <Row ></Row>
    </Router>
  );
}

export default App;
