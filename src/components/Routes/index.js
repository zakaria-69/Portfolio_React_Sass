import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const Index = () => {
    return(
       <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
       </Router>
    )
}

export default Index;