import React from 'react'; 
import styles from './Subcontractor.module.css'
import Header from './Header'; 
import Hero from './Hero'
import FixBorder  from './FixBorder'
import FeatureSection from "./FeatureSection";
import Join from './Join'
import QuestionSection  from './QuestionSection'
import FAQ from './FAQ'
import Footer from './Footer'

const SubcontractorPage = () =>{ 
    return (
        <div className= {styles.subcontractorPage}> 

        <Header/>
        <Hero/>
        <FixBorder heading={"Have questions?"}/>
        <FeatureSection/>
        <FixBorder heading={"Sign Up to Sell"}/>
        <Join/>
        <QuestionSection/>
        <FAQ/> 
        <Footer/>
        </div>
    );
}

export default SubcontractorPage;