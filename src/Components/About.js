import React from "react";
import Header from "./Header";
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Header />
      <p style={{paddingLeft:'5px'}}>
        "Welcome to Uniquick, your one-stop-shop for all your shopping needs. We
        are an e-commerce platform that offers a vast selection of products
        across multiple categories, including different brand of Phones
        ,accessories,Home Appliances,and Clother too.
        <br /> Our goal is to provide our customers with a seamless and
        convenient shopping experience, offering high-quality products at
        affordable prices. We believe in offering the best possible customer
        service,
        <br /> and our knowledgeable and friendly support team is available 24/7
        to answer any questions you may have. Our easy-to-use website and mobile
        app make shopping simple, whether you're at home or on the go.
        <br />
        At Uniquick, we are dedicated to providing a secure and trustworthy
        platform for our customers.
        <br /> We use state-of-the-art technology to ensure the safety and
        privacy of your personal information, and we employ strict security
        protocols to protect your financial transactions.
        <br />
        We are constantly working to improve our services and offerings, and we
        value your feedback and suggestions.
        <br /> If you have any comments or questions, please don't hesitate to
        contact us.
        <br />
        <h4>
          Thank you for choosing Uniquick. We look forward to serving you!
        </h4>
        </p>
        <hr />
        <div className="about-section">
          <div className="details">
            <h2>Contact us on</h2>
            <h3>Email id : shubhamraut.raut9497@gmail.com</h3>
            <h3>Phone Number : +702603,+290437</h3>
            <h3>Mobile Number : +91 9011516694</h3>
          </div>
          <div className="address">
            <h2> Address</h2>
            Suzy Queue<br/> 4455 Landing Lange, APT 4 <br/>Louisville, KY 40018-1234
          </div>
        </div>
        <Footer />
    </>
  );
};
export default About;
