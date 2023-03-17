import React, { useState } from "react";
import './DropDown.scss';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <select>
            <option selected value = "chest"> Chest </option>
            <option value = "legs"> Legs </option>
            <option value = "arms"> Arms </option>
            <option value = "traps"> Traps </option>
            <option value = "back"> Back </option>
        </select>
    </div>
  );
}
