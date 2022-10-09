import React from "react";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import styles from "./NavBar.module.css";
import { Badge, Popover } from "antd";
import { useState } from "react";
import UserProfile from "./user-profile";
import { getStorageUserData, setStorageUserData } from "../../storage/localStorage";
import { useEffect } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(getStorageUserData());
  useEffect(() => {
  }, []);
  console.log(userData);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
      <Popover
        placement="leftBottom"
        content={<UserProfile data={userData} />}
        open={open}
        onOpenChange={handleOpenChange}
        trigger="click"
      >
        <Badge
          className={styles.userBadge}
          color={"#1F50FB"}
          count={userData.balance}
          overflowCount={99999}
        >
          <img src={avatar} alt="Аватар пользователя"></img>
        </Badge>
      </Popover>
    </nav>
  );
};

export default NavBar;
