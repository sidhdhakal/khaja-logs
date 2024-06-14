import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PageTemplate = ({ children, title, titleRightChildren }) => {
  const navigate = useNavigate();

  return (
    <div className="page_template_container">
      <div className="leftsidepage_container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div className="admin_container">Admin Panel</div>
          <nav className="nav_container">
            <NavLink end to="/order" className="nav-link">
              Order
            </NavLink>
            <NavLink end to="/food" className="nav-link">
              Food
            </NavLink>
            <NavLink end to="/user" className="nav-link">
              User
            </NavLink>
            <NavLink end to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </nav>
        </div>
        <div
          onClick={() => navigate("/")}
          style={{
            cursor: "pointer",
            color: "white",
            padding: "30px 10px",
          }}
        >
          Log Out
        </div>
      </div>

      <div className="rightsidepage_container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2 style={{ color: "#F3B431"}}>{title}</h2>
          <div>{titleRightChildren}</div>
        </div>
        {children}
      </div>
      <div></div>
    </div>
  );
};

export default PageTemplate;
