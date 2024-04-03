import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage.js"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route exact path="/product" element={<ProductPage />}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
