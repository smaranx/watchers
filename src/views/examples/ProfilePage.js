import React, {useState} from "react";
import SimpleSlider from "./SimpleSlider";
import Faq from "react-faq-component";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HashLink as Link } from 'react-router-hash-link';

// reactstrap components
import {
  Collapse,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  NavbarBrand,
  Navbar,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import pdf from "assets/Whitepaper.pdf";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import TransparentFooter from "components/Footers/TransparentFooter";

const text= "We will be launching exclusive merch for our NFT holders. At launch, each NFT will entitle the owner to claim a set of merch for free. "
const text2="We will be creating a DAO which will be funded by 10% of the mint revenue. Each NFT will own a % of the DAO which they can cash out every six months or so."
const text3 ="In these uncertain times of war, we want to do our bit and help the people that are being affected. We will be donating $40k in ETH to the Ukrainian Government."
const text4 =" The success of a project depends upon the strength of the community. We will be creating private channels for our holders to discuss alpha about upcoming projects. We will also have weekly games with prizes, whitelist giveaways for other projects. Along with this we will be having member only events and parties all around the globe.";
const text5 = "The time has come for there to be a new Web 3.0 social media platform built for collaboration."
const styles = {
  bgColor: 'rgb(2,2,2,0)',
 titleTextColor: "white",
 rowTitleColor: "white",
 fontSize:"24px",
 fontWeight:"500",
  rowContentColor: 'white',
 arrowColor: "white",
};
function ProfilePage() {
  Aos.init();

  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const data = {
    title: "",
    rows: [
        {
            title: "  How many NFT'S are there?            ",
            content: `TBD`,
        },
        {
          title: "  What standard are the NFT'S?            ",
          content: `ERC 721A`,
      },
        {
            title: " Will there be a Pre-Sale?            ",
            content:
                "Yes, more details will be announced in our discord once launched",
        },
        {
            title: " What is the mint price?            ",
            content: `TBD`,
        },
        
        
        {
            title: "  How many NFT'S can I mint?            ",
            content: `TBD`,
        },
        
        {
            title: "  Wen mint?            ",
            content: `TBD`,
        } 
    ],
  };
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
<>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>

          <div className="navbar-translate">
            <NavbarBrand
              href=""
              target="_blank"
              id="navbar-brand"
            >
                                    <img
                        alt="..."
                        src={require("assets/logo.png").default}
                      ></img>
                      <span>WATCHERS NFT</span>
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2"  to="profile-page#section-home" style={{fontSize:"1rem"}}>
                                    HOME
                                    </Link>  
              </NavItem>
  
              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2" to="profile-page#section-about" style={{fontSize:"1rem"}}>
                                    ABOUT US
                                    </Link>
                
              </NavItem>
              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2" to="profile-page#section-road" style={{fontSize:"1rem"}}>
                                    ROADMAP
                                    </Link>
             
              </NavItem>
              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2" to="profile-page#mob" style={{fontSize:"1rem"}}>
                                    THE MOB
                                    </Link>
         
              </NavItem>
              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2" to={pdf} target="_blank" style={{fontSize:"1rem"}}>
                                    WHITEPAPER
                                    </Link>
                
              </NavItem>
              <NavItem>
              <Link className="mr-2 ml-4 mt-2 mb-2" to="profile-page#section-faq" style={{fontSize:"1rem"}}>
                                    FAQ
                                    </Link>
                
              </NavItem>
              <NavItem>
                
                                    <Link className="mr-2 ml-4 mt-2 mb-2" to="profile-page#section-team" style={{fontSize:"1rem"}}>
                                    TEAM
                                    </Link>

               
                
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
          <div className="wrapper" style={{background:"black"}} id="section-home">
        <ProfilePageHeader />
        <div id="stars"></div>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="stars4"></div>
        <div className="section section-team text-center remove-space3" id="section-about">
          <Container>
            <div className="team">
              <Row>
                <Col md="5">
                  <div >
                    <img
                      alt="..."
                      className="img-fluid team-img3"
                      src={require("assets/3.png").default}
                    ></img>
                 

                  </div>
                </Col>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="7">
                  <div className="team-player">

                     <h4 className="t-title mt-2 pb-3 pt-2">ABOUT US</h4>
                     <p className="about-stitle pt-3" style={{alignText: "left"}}>
                     Watchers is a collection of NFTs—unique digital collectibles living on the Ethereum blockchain. The NFT gives you access to members only perks and a like minded community. <br></br><br></br>Our goal is to create the next Web 3.0 social media platform.
<br></br>
Everyone has to start somewhere, this is just the beginning.

                    </p>

                  </div>
                </Col>

              </Row>
            </div>
          </Container>
        </div>
        <div className="section">
          <SimpleSlider></SimpleSlider>
          <Container>
 
          </Container>
        </div>
        <div className="section section-team text-center" id="section-road">
        <Row className="mb-5 justify-content-center">
     <Col md="4 justify-content-center">
  {/*    <img
                alt="..."
                className="img-fluid"
                src={require("assets/imgg.png").default}
              ></img>
           */}
{/*                 <h4 className="t-title mb-4 pb-3">ROADMAP</h4>
 */}     </Col>
              </Row>
         <h4 data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="t-title mt-2 pb-3 pt-2">ROADMAP</h4>
 
        <section id="cd-timeline" className="cd-container mb-5 pb-5">
          
		<div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="cd-timeline-block">
		

			<div className="cd-timeline-content ">
      <div className="cd-timeline-head-even">
        <h2 tyle={{marginBottom: "0px"}}>MERCH</h2>
        </div>      <div className="timeline-content-info">

        <p> {showMore ? text : `${text.substring(0, 200)}`} <br></br>
                         {/*<button className="btn-show" onClick={() => setShowMore(!showMore)}>{showMore ? "Read less" : "Read more"}</button>*/}</p>
        </div>


			</div> 
		</div> 

		<div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="cd-timeline-block" style={ showMore ? { marginTop:'30rem'} : {} }>
		

			<div  className="cd-timeline-content ">
        <div className="cd-timeline-head">
        <h2 tyle={{marginBottom: "0px"}}>THE DAO</h2>
        </div>
{/* 			
 */}        <div className="timeline-content-info">

        <p> {showMore2 ? text2 : `${text2.substring(0, 200)}`} <br></br>
                         {/*<button className="btn-show" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? "Read less" : "Read more"}</button>*/}</p>
        </div>


			</div> 
		</div> 
    <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="cd-timeline-block" style={ showMore2 ? { marginTop:'38rem'} : { marginTop:'6.5rem'} }>
		

			<div  className="cd-timeline-content ">
      <div className="cd-timeline-head-even">
        <h2 style={{marginBottom: "0px"}}>DONATION</h2>
        </div> 
         <div className="timeline-content-info">

        <p> {showMore3 ? text3 : `${text3.substring(0, 200)}`} <br></br>
                         {/*<button className="btn-show" onClick={() => setShowMore3(!showMore3)}   >{showMore3 ? "Read less" : "Read more"}</button>*/}</p>
        </div>


			</div> 
		</div> 
    <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="cd-timeline-block mb-4" style={ showMore3 ? { marginTop:'10rem'} : {} }>
		

			<div className="cd-timeline-content ">
      <div className="cd-timeline-head">
        <h2 tyle={{marginBottom: "0px"}}>COMMUNITY</h2>
        </div>     <div className="timeline-content-info">

        <p id="mob"> {showMore4 ? text4 : `${text4.substring(0, 500)}`} <br></br>
                         </p>
        </div>


			</div> 
		</div> 

    

	</section> 
        </div >
        <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className="text-center" style={ showMore4 ? { marginTop:'13rem'} : {marginTop:'10rem'} } >
          <Container >
            <div className="team" >
              <Row>
                <Col md="6 boxes1" >
                <div className="cd-timeline-head2">
        <h2 style={{marginBottom: "0px"}}>THE MOB</h2>
        </div>
                <Col md="12 boxes2">
                <p> {text5}
               
                </p>
           
    </Col>
                  </Col>
                  </Row>
                  </div>
                  </Container>

                  
                  
                 
          </div>

          

        <div className="section text-center mt-4 pt-4 pb-4" id="section-faq">
        <h4 className="t-title mt-2 pb-4">FAQ</h4>
          <Container>
            <div className="team">
              <Row className="mb-3">
     <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="4">
   {/*   <img
                alt="..."
                className="img-fluid"
                src={require("assets/imgg.png").default}
              ></img>
           */}
               
     </Col>
              </Row>
              <Row>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="6">
                
 

                <div  className="mt-0"   faq-section>
    <Faq
          styles={styles}
          data={data}
      />
    </div>
                </Col>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="6">
                  <div className="team-player">
                  <div >
                    <img
                      alt="..."
                      className="img-fluid team-img2"
                      src={require("assets/4.png").default}
                      style={{ marginTop:"-2rem" }}
                    ></img>
                 

                  </div>
                  </div>
                </Col>

              </Row>
            </div>
          </Container>
        </div>

        <div className="section section-team text-center" id="section-team">
        <div id="stars"></div>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="stars4"></div>
        <div className="container mt-4 pt-0">
  <div className="row justify-content-center">
    <div className="col-lg-12">
    <Row className="justify-content-center">

     <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="4 justify-content-center">
     <h4 className="t-title mb-4 mt-4 pb-4">TEAM</h4>

     {/* <img
                alt="..."
                className="img-fluid"
                src={require("assets/imgg.png").default}
              ></img> */}
          
{/*                 <h4 className="t-title mb-4 pb-3">TEAM</h4>

 */}     </Col>
              </Row>
      <div className="row row-grid">
        <div className="col-lg-4 mb-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/Rectangle 21.png").default}
              ></img>                    <h6  className="text-uppercase card-title card-title mt-4 mb-0 "  >MOBSTER <br></br>
FOUNDER</h6>
<a href="https://twitter.com/mobsterETH" target={"_blank"}>
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      

                    
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
</a>

                    {/*
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>*/}
              <p className="description mb-0 cent" >
              A degen at heart, Mobster has been a part of the NFT world for a long time. he started with $0 and flipped his way up. He has moderated for and worked on multiple NFT projects such as Cryptobatz and Veefriends.
It has always been his dream to create the mob.</p>
      
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/kc.webp").default}
              ></img>                    <h6 className="text-uppercase card-title card-title mt-4"  >KC <br></br>
FOUNDER</h6>
<a href="https://www.instagram.com/krishnavchopra_/" target={"_blank"}>
  {/*
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>*/}
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                     
                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
              <p className="description mb-0" >Since its inception, KC has been highly involved in the blockchain and crypto industry. Having founded and sold various firms in the space, as well as advising other projects from conception through product launch.</p>
       </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/labraor.webp").default}
              ></img>                    <h6 className="text-uppercase card-title mt-4"  >Luis Labrador              <br></br>
art director</h6>
<a href="https://www.imdb.com/name/nm1487237/" target={"_blank"}>
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}

                    >
 <img
                        alt="..."
                        src={require("assets/i5.png").default}
                      ></img>    
                                       </Button></a>
                                       <a href="https://www.artstation.com/luislabrador3d" target={"_blank"}>
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}

                    >
<img src="https://static.wixstatic.com/media/9a9dbc_2e210bb2b120418a8fcbad184644b715~mv2.png/v1/fill/w_42,h_42,al_c,usm_0.66_1.00_0.01,enc_auto/9a9dbc_2e210bb2b120418a8fcbad184644b715~mv2.png"></img>                    </Button></a>
              <p className="description mb-0" >Mr. Labrador has been a pioneer in animation and visual effects. He has worked with various film studios that include Disney Animation, DreamWorks Animation, and Sony Imageworks. HE is a 4 time Oscar award winner for Spiderman 2, Frozen, Big Hero 6, and the short animated film Feast and has seven Academy Award nominations.</p>
      
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="row row-grid">
        <div className="col-lg-4 mb-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/shaarif.webp").default}
              ></img>                    <h6  className="text-uppercase card-title card-title mt-4"  >shaarif nazir
              <br></br>
              head Artist
</h6>
<a href="https://twitter.com/conceptoshaarif" target={"_blank"}>
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}

                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>
                    <a href="https://www.instagram.com/concepts_of_shaarif/" target={"_blank"}>
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}

                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
              <p  className="description mb-0" >Shaarif is a self taught 3D concept artist, blockchain enthusiast and community moderator at NFT Malayali.
</p>
           </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/ratt.webp").default}
              ></img>    
              <h6 className="text-uppercase card-title card-title mt-4">Ratt
 <br></br>
 Investor
</h6>
<a href="https://www.instagram.com/ratankapoor/" target={"_blank"}>
{/*
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>*/}
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
              <p className="description mb-0" >Serial Entrepreneur - tech / Web3 investor - metaverse properties - cutting edge digital assets - stablecoin arbitrage - quantum sensing - health tech - fintech 
25 years of business experience in real estate, luxury and financial services.</p>
      
           </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/vir.webp").default}
              ></img>                    <h6 className="text-uppercase card-title card-title mt-4"  >VIR <br></br>
creative director
</h6>
<a href="https://www.instagram.com/vir_bhagat/" target={"_blank"} >
  {/*
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>*/}
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                     
                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
              <p className="description mb-0" >Since day one, VIR has been extremely involved in the crypto space and has recently entered the NFT space as-well. He was worked on multiple successful projects, he started out about 8 months ago by flipping different NFTs.

</p>
      
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <div className="row row-grid">
        <div className="col-lg-4 mb-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/sean.webp").default}
              ></img>                    <h6  className="text-uppercase card-title card-title mt-4"  >SEAN <br></br>
HEAD DEV</h6>
<a href="https://twitter.com/SeanNFT" target={"_blank"}>
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      
                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>{/*
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>*/}
              <p  className="description mb-0" >Software engineer who went down the crypto and web3 rabbit hole. You can either catch me at a desk coding until the early morning or out running after a football in a field.

</p>
           </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/jay.webp").default}
              ></img>    
              <h6 className="text-uppercase card-title card-title mt-4">JAY <br></br>
JUNIOR DEV</h6>
<a href="https://twitter.com/jaymakwanacodes" target={"_blank"}>
<Button
                      className="btn-icon mt-3 mr-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                     
                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>{/*
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>*/}
              <p className="description mb-0" >Jay is a web3 developer and enthusiast. He has worked on multiple start-ups with the goal of integrating web3 with the web2 ecosystem.

</p>
      
           </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  className="card border-0" >
            <div className="card-body">
            <img
                alt="..."
                className="img-fluid team-img"
                src={require("assets/pink.webp").default}
              ></img>                    <h6 className="text-uppercase card-title card-title mt-4"  >PINKMAN <br></br>
community manager
</h6>
<a href="https://twitter.com/PinkmanETH?t=ukIOTpzJzRsgG4gVrBu9OA&s=09" target={"_blank"}>
  {/*
<Button
                      className="btn-icon mt-3 mr-3" style={{

                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                    <i className="fab fa-twitter"></i>
                    </Button>*/}
                    <Button
                      className="btn-icon mt-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px"
                      }}
                     
                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>
              <p className="description mb-0" >Pinkman is an expert in analyzing market trends and customer requirements in order to create highly successful and focused marketing strategies.</p>
      
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="section section-team text-center mb-4">
          <Container>
            <div className="team">
              <Row>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="5">
                  <div >
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/Rectangle 28.png").default}
                    ></img>
                 

                  </div>
                </Col>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="7">
                  <div className="team-player cent" >
                  <h6 className="text-uppercase card-title card-title mt-4" textAlign="start"  >DEGEN ROCKS <br></br>
FRONT END DEV</h6>
<a href="https://twitter.com/degen_rocks" target={"_blank"}>
                  <Button
                      className="btn-icon mt-3 mr-3 mb-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px",textAlign:"start"
                      }}
                      
                    >
                      <i className="fab fa-twitter"></i>
                    </Button></a>
                    <a href="https://discord.com/invite/tZbdxgfWfF" target={"_blank"}>
                    <Button
                      className="btn-icon mt-3 mr-3 mb-3" style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px",textAlign:"start"
                      }}
                     
                    >
                      <i className="fab fa-discord"></i>
                    </Button></a>
                    <a href="https://instagram.com/degen.rocks" target={"_blank"}>
                    <Button
                      className="btn-icon mt-3 mr-3 mb-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px",textAlign:"start"
                      }}
                      
                    >
                      <i className="fab fa-instagram"></i>
                    </Button></a>
                    <a href="https://degen.rocks" target={"_blank"}>
                    <Button
                      className="btn-icon mt-3 mr-3 mb-3"
                      style={{
                        backgroundColor:
                          "rgb(0,0,0,0)",fontSize:"30px",textAlign:"start"
                      }}
                      
                    >
                      <img
                      alt="..."
                      className=""
                      src={require("assets/i2.png").default}
                    ></img> 
                     
                    </Button></a>
                    
                   
                    <p className="description-footer">
                    Degen rocks transforms Web2 Companies to Web3 & Develop Smart Contracts for NFTs on all Blockchain. They provides services in creating web3 supply chain, creating custom smart contracts & websites and NFT Consultations.
                    </p>

                  </div>
                </Col>

              </Row>
            </div>
          </Container>

        </div>
        <div className="section section-team text-center remove-space"> 
          <Container>
            <div className="team">
              <Row>
              <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="7">
                  <div className="team-player cent" >
                  <h4 className="faq-title mt-5 pt-5 mb-3">JOIN THE COMMUNITY</h4>

                  
                    <p className="description-footer mb-2">
                    Follow us on Twitter to get the latest updates!
                    </p>
                    <a href="https://twitter.com/The_WatchersNFT" target={"_blank"}>
                    <Button className="button-class mb-2 mt-2">Follow on Twitter</Button>
                    </a>
                  </div>
                </Col>
                <Col data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" md="5">
                  <div >
                    <img
                      alt="..."
                      className="img-fluid team-img2 mb-2 mt-3"
                      src={require("assets/2.png").default}
                    ></img>
                 

                  </div>
                </Col>
              

              </Row>
            </div>
          </Container>

        </div>
        </div>
        
        <TransparentFooter />
      </div>
    </>
  );
}

export default ProfilePage;
