import React from 'react' 
import styles from './FeatureSection.module.css'
import FadeInOnScroll from './FadeInOnScroll'
import img_1 from '../assets/img_1.png'
import img_2 from '../assets/img_2.png'
import img_3 from '../assets/img_3.png'
import img_7 from '../assets/img_7.png'

const FeatureSection = () => { 

    const features = [
        {
          title: "Find more projects.",
          description: "Explore and find exciting new projects today.",
          image: img_1
        },
        {
          title: "Simplified contracts and easy payment.",
          description: "Streamline your projects with clear contracts and hassle-free payment solutions.",
          image: img_2
        },
        {
          title: "Grow your revenue.",
          description: "Boost your income and expand your business effortlessly.",
          image: img_7
        }
      ];


      return( 

        
        <section className={styles.featureSection}>
      <h2 className={styles.featureTitle}>Trusted by Subcontractors</h2>
      {features.map((feature, index) => (
        
        <div key={index} className={styles.featureItem}>
          <div className= {styles.imagewrap}> 
            <img src={feature.image} alt="" className={styles.featureImage} />
          </div> 
          <div className={styles.featureText}>
            <h3 className={styles.featureItemTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        </div>
         
      ))}
    </section>
   
      );

    

}

export default FeatureSection;
