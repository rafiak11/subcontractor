import React from 'react'
import styles from './Join.module.css'
import img_6 from '../assets/img_6.jpg'

const Join = () => { 
    return(
        <section className={styles.main}>
            <div className={styles.container}> 
            <img src={img_6} alt="CoPro community background" 
                 className={styles.backgroundImage}/>
            <div className={styles.text}>
                <h2 className={styles.heading}>Join the CoPro Community</h2>
                <button className={styles.btn}>Join Now</button>
            </div> 
            </div>
        </section>
    )
}

export default Join; 

{/* <main className={styles.container}>
      <section className={styles.heroSection}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37d7c7fc4eedfba2a0e7dcccec6cea27cf6289fc8ac9429ebc49b887edeeb4ff?placeholderIfAbsent=true&apiKey=62f3e9b373474e93965da5910bbe5369" 
          alt="CoPro community background" 
          className={styles.backgroundImage}
        />
        <div className={styles.contentWrapper}>
          <h1 className={styles.heading}>Join the CoPro community</h1>
          <button className={styles.ctaButton}>
            <span className={styles.srOnly}>Click to</span>
            Join now
          </button>
        </div>
      </section>
    </main> */}