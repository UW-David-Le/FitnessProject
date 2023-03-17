import "./Hero.scss";
<<<<<<< Updated upstream
import Heroimg from "../../assets/image.png"

export default function Hero () {
    return ( 
     <div className="hero">
     <div className="hero__left">
     <h1 className="hero__header">Monkey Muscle</h1>
     <p className="hero__paragraph">"Step into our monkey kingdom and get ready to monkey around with fitness! Our gym is the perfect place for those who are new to working out and want to learn the ropes without feeling like a banana peel. Ready to unleash your inner monkey and swing into shape? Our gym is the perfect place for you! With plenty of monkey-themed humor to keep you entertained, you'll have a blast while you get fit. Join us and let's show those other gyms who the real king of the jungle is</p>
     <button className="hero__button">Choose your Monkey</button>
     </div>
     <div className="hero__right">
     <img  className="hero__img" src={Heroimg}/>
     </div>
     </div>
=======
import Hero from "../../assets/image.png"
export default function Hero () {
    return ( 
     <Hero className="hero">
     <div className="hero__left"></div>
     <div className="hero__right">
     <img  className="hero__img" src={Hero}
     </div>
     </Hero>
>>>>>>> Stashed changes
    )
 }
