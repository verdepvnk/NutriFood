import React from "react";
import SignInComp from "../components/signin";
import "../assets/styles/bootstrap.scss";
import Header from "../components/header";
import Footer from "../components/footer";
const SignIn = () => {
  return (
    <>
      <Header/>
      <SignInComp />
      <Footer/>
    </>
  );
};

export default SignIn;
