import React from "react";
import Select from "react-select";
import classes from "./Dropdown.module.scss";
import { useNavigate } from "react-router-dom";
const DropdownMenu = ({ options }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#1c274c",
      border: "none",
      outline:"none",
      boxShadow:"none",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor:"#1c274c"
    }),
  };
  const navigate = useNavigate()
  return (
    <Select
      className={classes.DropdownMenu}
      options={options}
      placeholder="Члены объединения"
      styles={customStyles}
      onChange={(e)=>navigate(e.value)}
    />
  );
};

export default DropdownMenu;
