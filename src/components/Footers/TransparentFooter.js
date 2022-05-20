/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>

        <div className="mb-2 footer-text" id="copyright" style={{textAlign:"center"}}>  ©2022 by Watchers NFT.   Made by
          <a
            href="https://degen.rocks"
            target="_blank" style={{color:"white"}}
          >
            <b>  Degen Rocks</b>
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
