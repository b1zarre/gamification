import React, { useState } from "react";
import { Layout } from "antd";
import TopicMenu from "./layout/SideBar/TopicMenu";
import "./App.css";
import NavBar from "./layout/NavBar/NavBar";
import SideBar from "./layout/SideBar/SideBar";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import { EmployeesPage } from "./pages/employees/EmployeesPage";
import LoginPage from "./pages/login";
import { setStorageUserData } from "./storage/localStorage";
function App() {
  setStorageUserData();
  const topics = [
    { title: "Главная", path: "/" },
    { title: "Сотрудники", path: "/employees" },
    { title: "Магазин", path: "/shop" },
  ];
  const [selectedKey, setSelectedKey] = useState("0");
  // const { state } = useContext(AuthContext);
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
  };
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Layout className="wrapper">
          <SideBar menu={Menu} />
          <Layout.Content className="content">
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/employees" element={<EmployeesPage />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
