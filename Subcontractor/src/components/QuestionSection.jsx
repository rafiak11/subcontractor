import React from "react";
import styles from "./QuestionSection.module.css";

const steps = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/246c1f061fbb493cb416f2d4cb317f7e1688450096915d0fabdf5b92fa7b042f?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369", text: "Sign Up" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce428737128e91a472a19c801ab2c378f026d9f4b0ddac11290d4552308d4c01?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369", text: "List your products" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/124d10a6ae54d2874484a76a454d076f30c766409c937ff6ea23f59c8f0e3747?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369", text: "Connect with customers" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dec65ba13f30047589d72d70a9a179fbedec5a22e298d93c87090a40a0dc066?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369", text: "Sell your products" }
];


const QuestionSection = () => {
  return (
    <section className={styles.questionSection}>
      <div className={styles.questionContent}>
        <div className={styles.stepsWrapper}>
          <h3 className={styles.stepsTitle}>Get started in 5 minutes</h3>
          <ul className={styles.stepsList}>
            {steps.map((step, index) => (
              <li key={index} className={styles.stepItem}>
                <img src={step.icon} alt="" className={styles.stepIcon} />
                <span className={styles.stepText}>{step.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageWrapper}> 
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb42510c5c92368e74cdb079eed59
            be02f05662619ce9b470a6857a0367988ac?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5
            910bbe5369" alt="Getting Started Illustration" className={styles.questionImage} />
        </div>      
      </div>
    </section>
  );
}

export default QuestionSection;