import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="credit">
        <p>
          Copyright {year} - developed by{" "}
          <a
            href="https://techieemma.tech"
            target="_blank"
            rel="noreferrer noopener"
          >
            Techie Emma
          </a>{" "}
          &{" "}
          <a
            href="https://okoyecharles.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Okoye Charles
          </a>{" "}
          | All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
