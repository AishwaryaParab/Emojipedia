import React from "react";

const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <h3 className="developer">Developed by Aishwarya Parab</h3>
      <p className="copyright">Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
