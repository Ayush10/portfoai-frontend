import React from "react";
import LoginForm from "../../components/LoginForm";
import SponsorSection from "../../components/SponsorSection";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="left-side">
          <LoginForm />
          <SponsorSection />
        </div>
        <div className="right-side">
          <Banner />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
