import React from "react";
import vid from "../../assets/vid.mp4"

// reactstrap components
import { Button, Col, Container, Row } from "reactstrap";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div
        className="page-header clear-filter page-header-large"
        filter-color="black"
      >
        <div
          className="page-header-image"
          style={{
            background:"black"
          }}
          ref={pageHeader}
        ></div>
        <Container >
          <div className="pt-4 pt-5 mt-4">
              <video width="100%" height="100%" loop muted autoPlay playsInline oncanplay="this.play()" onloadedmetadata="this.muted = true">
<source src={vid} type="video/mp4"/>
</video>          </div>
<Row >
              <Col className="socialicon mt-3" >
                <a href="" target={"_blank"}>
              <Button
                      className="btn-icon mr-4" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"33px"
                      }}
                      
                    >
                      <i className="fab fa-discord"></i>
                    </Button></a>
                    <a href="" target={"_blank"}>
                    <Button
                      className="btn-icon mr-4 "
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"33px"
                      }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
                    <a href="https://twitter.com/The_WatchersNFT" target={"_blank"}>
                    <Button
                      className="btn-icon mr-4"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"33px"
                      }}
                      
                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>
                    <a href="" target={"_blank"}>
                    <Button
                      className="btn-icon mr-4"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      
                    >
      <img
                        alt="..."
                        src={require("assets/Vector.png").default}
                      ></img>                    </Button></a>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
