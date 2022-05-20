import React, { useState } from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components

import vid from "../assets/animation.mp4"


import { useHistory } from "react-router";
import { Col, Row } from "reactstrap";
import ProfilePage from "./examples/ProfilePage";
import MainPage from "./MainPage";

function Index() {
  let history = useHistory();
  const [showMore, setShowMore] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
        setShowMore(!showMore);

    }, 4000);
  }, []);
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    {showMore?<MainPage></MainPage>:<ProfilePage></ProfilePage>}

    </>
  );
}

export default Index;
