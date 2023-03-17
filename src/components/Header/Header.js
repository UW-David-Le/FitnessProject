
import Logo from "../../assets/681027.png";
import "./Header.scss";


export default function Header () {
    
   return ( 
        <header className="header">
          <div className="header__logo">
            <img className="header__logoImg" src={Logo} />
          </div>
          <div className="header__title"> Simian Strength</div>
          <div className="header__nav">
            <button className="header__navBtn"> Home</button>
            <div className="header__dropdown">
              <select className="header__navBtn">
                <option>Exercise</option>
                <option>quadriceps</option>
                <option>chest</option>
                <option>lowerBack</option>
                <option>trap</option>
                <option>Hamstrings</option>
              </select>
            </div>
            <button className="header__navBtn">Profile</button>
          </div>
        </header>
   )
}

