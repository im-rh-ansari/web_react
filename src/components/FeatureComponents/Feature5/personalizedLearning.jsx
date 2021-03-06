import React from "react";
import styled from "styled-components";
import banner_one from "./Images/banner_one.svg";
import banner_two from "./Images/banner_two.svg";
import banner_three from "./Images/banner_three.svg";
import live_inter from "./Images/live_inter.svg";
import trust_con from "./Images/trust_con.svg";
import engg_ass from "./Images/engg_ass.svg";
import convi_safe from "./Images/convi_safe.svg";
import phone from "./Images/phone.svg";
import expert_teac from "./Images/expert_teac.svg";
import NavbarComponent from "../../NavbarComponent";
import Footer from "../../Footer";
import GetTheApp from "../../GetTheApp";


const personalizedLearning = () => {
  return (
    <div>
      <header>
      <NavbarComponent />
      </header>
      <Wrapper>
        <div>
          <div className="jumbotron text-uppercase">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="live" style = {{ fontSize : "33px" }}> Personalised Learning</h1>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <svg viewBox="0 0 1500 100">
              {/* Symbol*/}
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="70%" dy=".35em">
                  CONSIDER ' YOU '
                </text>
              </symbol>
              {/* Duplicate symbols*/}
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
              <use className="text" xlinkHref="#s-text" />
            </svg>
            <div className="features ">
              <div className="container ">
                <div className="row"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-12 women1"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={banner_one} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <h3 className=" above1">Mentorship</h3>
                <br />
                <p className=" abovep">
                  We focus on students individually as well as we provide group
                  studies. In individual sessions, the teacher is able to focus
                  on one student and mentor them flexibly. Increasing the
                  interaction, a pool of knowledge is created and students are
                  brushen up with the qualities of team work. Our team provides
                  both individual and group studies.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div
                className="col-md-4 col-12"
                data-aos="fade-right"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <h3 className=" above ">Conceptual clarity</h3>
                <br />
                <p className=" abovep">
                  We are a team of IITians who are experienced and have command
                  in our subjects. We tend to believe that the concepts should
                  be clear of an individual and basic points should be strong.
                  We go through the problems of students and give the easiest
                  solution to them.
                </p>
              </div>
              <div
                className="col-md-8 col-12 women2 "
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <img src={banner_two} alt="picture" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="container banner">
            <div className="row">
              <div
                className="col-md-8 col-12 women3"
                data-aos="fade-down"
                data-aos-duration={1000}
                style={{ margin: "auto" }}
              >
                <img src={banner_three} alt="picture" />
              </div>
              <div
                className="col-md-4 col-12"
                data-aos="fade-up"
                data-aos-duration={1500}
                style={{ margin: "auto" }}
              >
                <h3 className=" above1">Mock tests</h3>
                <br />
                <p className=" abovep">
                  To assure that the student is understanding the concepts,
                  weekly tests are taken. This would generate a habit for a
                  student to write. Mock tests help students to gain confidence
                  and to know their weak and strong points.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            className="card"
            style={{
              marginTop: "10%",
              background:
                "linear-gradient(297.17deg, #FF5E62 6.67%, #FF9966 91.82%)",
              paddingBottom: "40px",
              height: "400px",
              border: "none",
              boxShadow: "none",
            }}
          >
            <br />
            <h1 style={{ textAlign: "center", color: "black" }}>
              Why <span style={{ color: "aliceblue" }}>MissionEd </span>works?
            </h1>
            <p style={{ textAlign: "center", color: "white" }}>
              The elite features of MissionEd makes it one of the No. 1 Ed-Tech
              platforms in India
            </p>
          </div>
          <div style={{ marginTop: "-200px" }}>
          <div className="container">
          <div className="card-deck">
            <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={1000}>
             <a href="/feature3" style={{ textDecoration: 'none' }}>
             <a href="/feature3"> <img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={expert_teac} alt="" /></a>
              <div className="card-block ">
                <h4 className="card-title text-center card-one  ct-1" style={{marginTop:"-30px" , color: "#eb5757"}}>Expert Teacher</h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
            <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 " style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={1500}>
             <a href="/feature4" style={{ textDecoration: 'none' }}>
             <a href="/feature4" ><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={live_inter} alt="" /></a>
              <div className="card-block ">
                <h4 className="card-title text-center card-two  ct-1" style={{color: "#2f80ed"}}>Live and Interactive</h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
            <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={2000}>
             <a href="/feature1" style={{ textDecoration: 'none' }}>
             <a href="/feature1"> <img className="card-img-top  mx-auto image-4 " style={{paddingTop: '30px', marginTop: '50px', marginBottom: '70px'}} src={engg_ass} alt="" /></a>
              <div className="card-block ">
                <h4 className="card-title text-center  card-three  ct-1" style={{marginTop: "-20px" , color: "#f2c94c"}} >Engaging Assignments</h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
            <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>
            <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={2500}>
              <a href="/feature6" style={{ textDecoration: 'none' }}>
              <a href="/feature6"><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '30px', marginTop: '20px', marginBottom: '70px'}} src={trust_con} alt="" /></a>
              <div className="card-block ">
                <h4 className="card-title text-center card-four  ct-1">Trusted Content</h4>
              </div>
              </a>
            </div>
            <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 " style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={3000}>
              <a href="/feature2" style={{ textDecoration: 'none' }}>
              <a href="/feature2"><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={convi_safe} alt="" /></a>
              <div className="card-block ">
                <h4 className="card-title text-center card-five ct-1" style={{color: "#6fcf97"}}>Convinent and Safe</h4>
              </div>
              </a>
            </div>
            <div className="w-100 d-none d-xl-block">{/* wrap every 5 on xl*/}</div>        
          </div>
         
        </div>
            <br />
            <br />
            <br />
          </div>
          
        </div>
        <GetTheApp/>
        <Footer/>
      </Wrapper>
    </div>
  );
};

export default personalizedLearning;

const Wrapper = styled.div`
  body {
    font-family: "Playfair Display", serif;
    background-image: url("Images/bg.png");
  }
  .jumbotron {
    /* padding-top: .5rem; */
    height: 200px;
    margin: 0 auto;
    top: 24.41%;
    bottom: 51.17%;
    text-align: center;
    background: linear-gradient(297.17deg, #ff5e62 6.67%, #ff9966 91.82%);
    mix-blend-mode: normal;
        padding-top:110px;

  }
  .jumbotron1{
    background: #fff5e5;
    height: 200px;
    padding-top:110px;
    }
    .live {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    color: #202336;
  }
  h2 {
    font-weight: 100px;
  }
  .card1 {
    background-color: #ffffff;
    padding: 20px;
  }

  .card-deck .card-two {
    margin-top: -45px;
  }

  .card-deck .card-three {
    margin-top: 0px;
  }

  .card-deck .card-four {
    margin-top: 20px;
  }

  .card-deck .card-five {
    margin-top: 10px;
  }

  .main-title {
    color: #fa9917;
  }
  #main {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
  }
  #h1 {
    background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
    width: 100%;
    height: 20vh;
    position: relative;
  }
  .card {
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    position: relative;
    font-family: "Playfair Display", serif;
    font-weight: bold;

    letter-spacing: calc(0.5em+1vh);
    line-height: calc(1em+0.75vh);
    color: white;
    padding-top: 2%;
    font-size: 70px;
  }
  h3 {
    font-weight: bold;
  }
  h2 {
    position: relative;
    font-family: "Playfair Display", serif;
    color: black;
    font-size: 50px;

    text-align: center;
    vertical-align: middle;
    top: 1%;
  }
  .image-background {
    background-color: #fffbef;
  }
  .card01 {
    width: 50%;
  }
  .image-1 {
    margin-top: 5%;
  }
  .image-2 {
    margin-top: 5%;
  }
  .image-3 {
    margin-top: 5%;
  }
  .image-4 {
    margin-top: 5%;
  }
  .image-5 {
    margin-top: 5%;
  }
  .image-6 {
    margin-bottom: 5%;
  }
  .btn {
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
  }
  .explore-all a {
    color: #fb8f1d;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
  }
  /* Darker background on mouse-over */
  .btn:hover {
    box-shadow: 2px 2px 5px black;
  }

  .ct-1 {
    color: #ff6200;

    font-size: 24px;
    letter-spacing: 0.6px;
    line-height: 28px;
  }
  .ct-2 {
    color: #000;

    font-size: 18px;
    letter-spacing: 0.45px;
    line-height: 21px;
    opacity: 0.8;
    padding-bottom: 10%;
  }

  .banner {
    margin-top: 10%;
  }

  .live {
    margin-top: -35px;
  }

  .main-para {
    opacity: 0.5;
  }

  .abovep {
    text-align: justify;
    font-size: 19px;
  }

  .women1 img {
    margin-left: 50px;
    height: auto;
    width: 500px;
  }

  .women2 img {
    margin-left: 200px;
    height: auto;
    width: 500px;
  }

  .women3 img {
    height: auto;
    width: 500px;
  }

  /*flicker animation heading*/

  .text {
    font: 5em/1 "Playfair Display", serif;
    fill: none;
    stroke-width: 3;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #f2385a;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #f5a503;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #e9f1df;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #56d9cd;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #3aa1bf;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }

  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      padding-top: 10%;
      font-size: calc(2rem + 3vw);
    }
    
    #h1 {
      height: 20vh;
    }
    .women2,
    .women3,
    .women1 {
      display: none;
    }

    .abovep {
    font-size: 23px;
  }

    .abc {
      display: none;
    }
    .phone {
      margin-left: 35px;
      margin-bottom: 20px;
    }
    .card {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .xyz {
      margin-bottom: -40px;
    }
  }
`;
