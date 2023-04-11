import "./LoginPage.scss";
import Logo from "../../assets/gym.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/1");
  };
  return (
    <div class="container">
      <form class="login-form">
        <h1 className="login-form__header">YourFitnessBuddy</h1>
        <img src={Logo} alt="" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <Link to = "/1"><button>Login</button></Link>
      </form>
    </div>
  );
}
