import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import BucketListPage from './components/BucketListPage';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<BucketListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
