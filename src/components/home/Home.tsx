import React from "react";
import HomeWhite from "../img/Home-White.png";
import HomeBlack from "../img/Home-Black.png";
import Nav from "../navbar/Nav";
import { useSelector } from "react-redux";
import "./home.scss";

export default function Home () {
  const theme = useSelector((state: { theme: { theme: string } } ) => state.theme.theme);

  return (
    <>
      <Nav />
      <div className={"home-content"}>
        {theme === "light" ? (
          <img src={HomeWhite} alt="Vape White" />
        ) : (
          <img src={HomeBlack} alt="Vape Black" />
        )}
      </div>
    </>
  );
}