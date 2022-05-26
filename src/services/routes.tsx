import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import NewUsers from "pages/NewUsers";
import EditUsers from "pages/EditUsers";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewUsers />} />
        <Route path="/edit/:id" element={<EditUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
