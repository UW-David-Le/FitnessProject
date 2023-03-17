import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../../assets/681027.png";
import "./Header.scss";


export default function Header() {
  // const [quadricepsList, setQuadricepList] = useState([])
  // const [chestList, setChestList] = useState([])
  // const [lowerBackList, setLowerBackList] = useState([])
  // const [armsList, setArmsList] = useState([])
  // const [trapList, setTrapList] = useState([])
  // const [hamstringsList, setHamstringsList] = useState([])

  // const SingleLegPressImage = quadricepsList[0]

  //     useEffect(() => {
  //         let muscle = 'quadriceps';
  //         const api_key = 'SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX';
  //         const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

  //         axios.get(url, { headers: { 'X-Api-Key': api_key } })
  //             .then(response => {
  //                 console.log(response.data);
  //             })
  //             .catch(error => {
  //                 console.error('Error:', error.response.data);
  // });
  //         },[]);
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
    
    
    
  );
}
