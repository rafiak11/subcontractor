import React from 'react'
import styles from './FixBorder.module.css'

const FixBorder = ({heading}) => { 
    return(
     <section className= {styles.bordersection}> 
        <div className= {styles.border}> 
            <h2 className={styles.heading}> <u>{heading}</u> </h2>
        </div>
     </section>
    );
}

export default FixBorder