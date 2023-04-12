import Logo from "../../assets/gym.png";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value !== "Exercise") navigate(e.target.value);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logoImg" src={Logo} />
      </div>
      <div className="header__title"> YourFitnessBuddy</div>
      <div className="header__nav">
        <div class="radio-inputs">
          <label class="radio">
            <input type="radio" name="radio" checked="" />
            <span class="name">Home</span>
          </label>
          <label class="radio">
            <input type="radio" name="radio" />
            <div className="header__dropdown">
              <select onClick={handleClick} className="header__navBtn">
                <option>Exercise</option>
                <option value = "/quadriceps">Quadriceps</option>
                <option value="/chest">Chest</option>
                <option value="/lower_back">LowerBack</option>
                <option value="/traps">Trap</option>
                <option value = "/hamstrings">Hamstrings</option>
              </select>
            </div>
          </label>

          <label class="radio">
            <input type="radio" name="radio" />
            <span class="name">Profile</span>
          </label>
        </div>
      </div>
    </header>
  );
}
