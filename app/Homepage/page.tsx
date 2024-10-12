import React from "react";
import styles from '../../components/HomePage.module.css';
import SponsorSection from "../../components/SponsorSection";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const HomePage = () => {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.hero}>
              <h1 className={styles.heroTitle}>Smart Investation</h1>
              <h2 className={styles.heroSubTitle}>
              Invest Your Money With Us <br />
              <span className={styles.and}>and</span> <span className={styles.highlight}>Get Amazing Profit</span>
            </h2>
            <p className={styles.heroDescription}>
                 Maximize your investment in the capital market world  with the<br />
                 convenience and various features provided by Tradidant.
            </p>
              <div className={styles.buttons}>
                <button className={styles.btnPrimary}>Get Started</button>
                <button className={styles.btnSecondary}>See How It Works</button>
              </div>
            </div>
            <div className={styles.sponsor}>
              <SponsorSection />
            </div>
          </div>
          <div className={styles.rightSide}>
            <Banner />
          </div>
        </div>
      </Layout>
    );
  };
  
  export default HomePage;