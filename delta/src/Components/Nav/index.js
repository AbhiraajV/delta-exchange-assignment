import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Reuse/Button";

function Nav() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {localStorage.getItem("user") ? (
        <Button
          placeholder={"Logout"}
          onclick={() => localStorage.removeItem("user")}
        />
      ) : (
        <Link to={"/login"}>Login</Link>
      )}

      <Link to={"/table"}>View Your Members!</Link>
    </div>
  );
}

export default Nav;
