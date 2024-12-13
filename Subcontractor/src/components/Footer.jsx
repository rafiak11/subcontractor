import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerSections = [
    {
      title: "About CoPro",
      links: ["Who we are", "FAQs", "Blog"]
    },
    {
      title: "Other Links",
      links: ["Homepage", "Sellers", "Sub-Contractors", "Customers"]
    },
    {
      title: "Learn More",
      links: ["Security", "Privacy", "Terms & Conditions"]
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {footerSections.map((section, index) => (
          <div key={index} className={styles.footerSection}>
            <h3 className={styles.footerSectionTitle}>{section.title}</h3>
            <ul className={styles.footerLinkList}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.footerContact}>
          <h3 className={styles.footerSectionTitle}>Contact Us</h3>
          <address className={styles.footerAddress}>
            Office address: M143, GK2, Delhi<br />
            Support: 1234567890<br />
            Mail us: support@gmail.com<br />
            <a href="#help" className={styles.footerLink}>Help</a>
          </address>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>Copyright © CoPro</p>
      </div>
    </footer>
  );
}

export default Footer;
