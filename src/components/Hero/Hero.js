import "./Hero.scss";
import Heroimg from "../../assets/hero_gym.avif"
import HeroimgIntermediate from "../../assets/hero_intermediate.avif"

export default function Hero ({difficulty}) {
    return ( 
        <>
     <div className="hero">
  
     {(difficulty === "beginner") ?  <img className="hero__img" alt="" src={Heroimg} /> : <img className="hero__img" alt="" src={HeroimgIntermediate}/>}
     {/* <div className="text-overlay">
        <h1>Welcome to your all in one personalized fitness application </h1>
      </div> */}
     
     </div>
        {/* <div className="hero__left">
        <h1 className="hero__header">Monkey Muscle</h1>
        <p className="hero__paragraph">"Step into our monkey kingdom and get ready to monkey around with fitness! Our gym is the perfect place for those who are new to working out and want to learn the ropes without feeling like a banana peel. Ready to unleash your inner monkey and swing into shape? Our gym is the perfect place for you! With plenty of monkey-themed humor to keep you entertained, you'll have a blast while you get fit. Join us and let's show those other gyms who the real king of the jungle is</p>
        <button className="hero__button">Choose your Monkey</button>
        </div> */}
        </>
    )
 }
