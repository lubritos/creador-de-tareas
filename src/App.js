import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/home';
import NotFound from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
