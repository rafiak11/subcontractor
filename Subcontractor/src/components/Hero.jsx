import React from 'react'
import styles from './Hero.module.css'
import img_hero from '../assets/img_hero.jpg'

const Hero = () => { 
    return (

        <section className={styles.hero}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4c9d54e99b1d2e8dbf5205a5aa0c82c1c7bb1cecb994035b9d41d8a7b2f45c4?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369" alt="Hero Background" className={styles.heroBackground} />
            <div className={styles.heroContent}> 
                <div className= {styles.heroImageWrapper}> 
                <img src={img_hero} alt="Construction Materials" className={styles.heroImage} />
                </div>

                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Find Jobs and project with CoPro</h1>
                    <div className={styles.ctaWrapper}> 
                    <button className={styles.ctaButton}>Find Jobs</button>
                    <p className={styles.signInLink}>
                            <u>Already have an account? <a href="#signin">Sign in</a></u>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero; 