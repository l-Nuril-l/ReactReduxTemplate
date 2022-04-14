import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store'
import Sticky from './pages/Sticky';
import Counter from './pages/Counter';
import Menu from './Menu';
import Rainbow from './pages/Rainbow';


function App() {
  return (
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="counter" element={<Counter />} />
            <Route path="sticky" element={<Sticky />} />
            <Route path="rainbow" element={<Rainbow />} />
          </Routes>
        </Provider>
    </BrowserRouter>)
}

export default App