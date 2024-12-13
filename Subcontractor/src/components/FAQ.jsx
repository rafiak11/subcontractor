import React, { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ = () =>{ 
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    { question: "What are the documents required for registration?" },
    { question: "How long does the registration process take?" },
    { question: "What types of products can I sell on CoPro?" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h3 className={styles.faqTitle}>Frequently asked questions</h3>
      <ul className={styles.faqList}>
        {faqItems.map((item, index) => (
          <li key={index} className={styles.faqItem}>
            <button
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <h5 className={styles.question}>{item.question}</h5>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1825812f3d95b1309b7b2de4624b0195ac91bd763e85b884f63dc2445d950851?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369"
                alt=""
                className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`}
              />
            </button>
            {openIndex === index && (
              <div className={styles.faqAnswer}>
                <p>Answer to the question goes here.</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
