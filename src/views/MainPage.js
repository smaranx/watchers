import React, {useState} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components

import vid from "../assets/animation.mp4"


import { useHistory } from "react-router";
import { Col, Row } from "reactstrap";

function MainPage() {
  let history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
        history.push("/");

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
    <body style={{minHeight:"100vh",backgroundColor:"black",maxHeight:"100vh", overflowY:"hidden"}}>
    <div className="wrapper" >
              <Row style={{textAlign:"center", verticalAlign:"middle"}} >
                <Col md="4"  style={{ position: "absolute",
    top: "40%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"}}>
                <center>

                <video width="100%" height="100%" loop muted autoPlay playsInline oncanplay="this.play()" onloadedmetadata="this.muted = true">
<source src={vid} type="video/mp4"/>
</video>
</center>

                </Col>
              </Row>
              <Row style={{textAlign:"center"}} >
                <Col md="12 pt-5" style={{textAlign:"center",position: "absolute",
    top: "60%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"}}>
                    
                <h1 class="crt site-title">
  WE ARE WATCHING
</h1>            
                </Col>
              </Row>
            </div>
    </body>

    </>
  );
}

export default MainPage;
