import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      {!isAuth ? (
        <Link to="/login">ログイン</Link>
      ) : (
        <>
          <Link to="/createpost">記事投稿</Link>
          <Link to="/logout">ログアウト</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
