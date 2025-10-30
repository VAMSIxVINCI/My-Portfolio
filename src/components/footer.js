import React from "react";
import "../styles/Footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Vamsi Sankar — Built with React</p>
      </div>
    </footer>
  );
}
