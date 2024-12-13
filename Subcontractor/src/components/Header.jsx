import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/65e2043ef3a6750b6be55d41002e560b439eb865cc91412b371e4a7db667936d?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369" 
      alt="Company Logo" className={styles.logo} />
    </header>
  );
}

export default Header;