import logo from "./Assets/logo.png"
import styled from "styled-components"
import trophy from "./Assets/1.png"
import rightpicture from "./Assets/2.png"
import bottompic from "./Assets/3.png"
import { BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";




function App() {
  return (
    <Container>
      <header>
        <img src={logo} alt="logo"/>
        
      </header>
      <div className="top-content">
        <div className="top-left-content">
         <img src={trophy} alt="trophy"/>
        </div>
        <div className="top-right-content">
            <h2>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 FOR 4TH TIME</h2>
          <ul>
            <li>C.R.I's energy efficient products are well recognized by various Government institutions, as trustworthy products for various products across the globe to save energy</li>
            <li>C.R.I is the highest contributor in the country for the projects of EESL (Energy Efficiency Service Limited) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps with iot enabled control panel</li>
          </ul>
         <img src={rightpicture} alt="photo"/>
         <h5>Government of India has awarded the <span> "National Energy conservation Award 2018"</span> Mr.G.Selvaraj joint managing director of C.R.I Group recieved the award from Smt. Sumitra mahajan, speaker of lok sabha & shri Raj Kumar Singh, Honorable Minister of State </h5>
        </div>
      </div>
      <div className="center-content">
      <p>installed over 10 lakhs star rated pumpsets across the country resulting in a cumulative saving of more than 9,000 million units of power for the nation</p>
      <img src={bottompic} alt="image"/>
      <div className="tools">
        <p>Valves -</p>
        <p>Pumps -</p>
        <p>Pipes -</p>
        <p>ioT Drives and Controllers -</p>
        <p>Wires & Cabels -</p>
        <p>Solar Systems -</p>
        <p>Motors</p>
      </div>
      </div>
      <footer>
       <h2>C.R.I fluid systems products cater to diverse segments</h2>
       <div className="elements">
        <p>chemicals and process</p>
        <p>power</p>
        <p>water & waste water</p>
        <p>oils & gas</p>
        <p>pharma</p>
        <p>sugars & distilleries</p>
        <p>paper & pulp</p>
        <p>marine & defence</p>
        <p>metal & mining</p>
        <p>food & beverage</p>
        <p>petrochemical & refineries</p>
        <p>solar</p>
        <p>building</p>
        <p>hvac</p>
        <p>fire fighting</p>
        <p className="last-p">agriculture and residential</p>
       </div>
       <div className="socials">
         <div className="phone">
          <BsTelephone/> 
          <h4>Toll free 1800 200 1234</h4>
         </div>
         <div className="facebook">
          <CiFacebook/>
          <h4>www.facebook.com/cripumps</h4>
         </div>
         <div className="web">
          <CiGlobe/>
          <h4>www.crigroups.com</h4>
         </div>
       </div>
      </footer>
      
    </Container>
  );
}

export default App;
const Container = styled.div`
   min-height: 100vh;
   width: 100vw;
   background-color: #ffcc00; /* Bright yellow */

  /* Gradient */
  background: linear-gradient(to top, #ffcc00, transparent);
   header{
    height: 150px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      height: 75%;
    }
   }
   .top-content{
    height: calc(100vh - 150px);
    width: 100%;
    
    display: flex;
   
    .top-left-content{
      
      height: 100%;
      width: 40%;
      img{
        height: 98%;
        width: 80%;
      }
    }
    .top-right-content{
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 60%;
      h2{
        margin-bottom: 1rem;
      }
      ul{
        width: calc(100% - 4rem);
      li{
        margin-left: 2.5rem;
      
        font-weight:bold;
      }

    }
    img {
      background-size: cover;
      height: 65%;
      width: 100%;
    }
    h5 {
      margin-top: 2rem;
      font-size: 1.3rem;
      font-weight: 500;
      
      span{
        font-weight: bold;
      }
    }
    }
  }
  .center-content{
     width: calc(100% - 4rem);
     border-bottom: 2px solid red;
     margin: 0 1.5rem;
     display: flex;
     flex-direction: column;
     align-items: center;
    p{
      height: 80px;
      margin-top: 1rem;
      text-transform: uppercase;
       text-align: center;
      font-size: 1.3rem;
     
      
    }
    img {
      background-size: cover;
      margin: 0 4.5rem;
      width: 80%;
      height: 60%;
      padding: 2rem 1.5rem;
    }
    .tools{
      display: flex;
      justify-content: center;
      margin-bottom: 1.2rem;
      p{
        margin-left: 1rem;
      }
    }
  }
  footer{
    h2{
      margin-top:2rem;
      text-transform: uppercase;
      text-align: center;
    }
    .elements{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 1.2rem;
      margin: 2rem 2.5rem;
      p{
        font-size: 1.2rem;
        padding-right: 5px;
        margin-right: 10px;
        text-transform: uppercase;
        border-right: 2px solid red;
      }
      .last-p{
        border: none;
      }
    }
    .socials{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: red;
      height: 150px;
      font-size: 1.5rem;
      color: white;
      .phone{
        display: flex;
      }
      .facebook{
        display: flex;
      }
      .web{
        display: flex;
      }
      
    }

  }
  @media screen and (max-width: 480px){
      header{
        height: 100px;
        width: 100%;
      }
      .top-content{
        height: calc(100vh - 100px);
        width: 100%;
        .top-left-content{
          height: 100%;
          width: 45%;
          img{
            background-size: cover;
          }
        }
        .top-right-content{
          height: 100%;
          width: 55%;
          h2{
            font-size: 0.8rem;

          }
          ul{
            width: 100%;
            li{
              font-size: 0.6rem;
              margin-left: 5px;
              margin-bottom: 8px;
            }
          }
          img{
            background-size: cover;
          }
          h5{
            font-size: 1rem;
          }
        }
      }
      .center-content{
        p{
          font-size: 1rem;
        }
        .tools{
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 0.8rem;
          p{
            height: 60%;

          }
        }
      }
      footer{
        h2{
          font-size: 1rem;
        }
        .elements{
          p{
          font-size: 0.7rem;
          }
        }
        .socials{
          margin-top: 0;
          height: 100px;
          h4{
          font-size: 0.5rem;
          }
        }
      }
  }
  @media screen and (max-width: 320px){
      header{
        height: 80px;
        width: 100%;
      }
      .top-content{
        height: calc(100vh - 80px);
        width: 100%;
        .top-left-content{
          height: 100%;
          width: 45%;
          img{
            background-size: cover;
          }
        }
        .top-right-content{
          height: 100%;
          width: 55%;
          h2{
            font-size: 0.5rem;

          }
          ul{
            width: 100%;
            li{
              font-size: 0.3rem;
              margin-left: 3px;
              margin-bottom: 6px;
            }
          }
          img{
            background-size: cover;
          }
          h5{
            font-size: 0.8rem;
          }
        }
      }
      .center-content{
        p{
          font-size: 0.8rem;
          margin: 10px;
        }
        .tools{
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
          p{
            height: 60%;

          }
        }
      }
      footer{
        h2{
          font-size: 0.7rem;
        }
        .elements{
          p{
          font-size: 0.5rem;
          }
        }
        .socials{
          margin-top: 0;
          height: 100px;
          h4{
            font-size: 0.4rem;
          }
        }
      }
  }
`
