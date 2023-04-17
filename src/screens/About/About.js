import React from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import DevDetail from "./DevDetail.js";

class AboutSection extends React.Component {
  render() {
    return (
      <div className={styles.dashboardPage}>
        {/* Header with Logo */}
        <header className={styles.header}>
          <img
            src="./Images/DocValidateAPI-logo.png"
            alt="DocValidateLogo"
            className={styles.logoImage}
            onClick={() => this.props.navigate("/")}
          />
        </header>

        {/* Developer's Details Section */}
        <div className={styles.about__DevDetailsSection}>
          {/* Aditi Chatterjee */}
          <DevDetail
            devData={{
              image: "./Images/Aditi.jpg",
              name: "Aditi Chatterjee",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
              facebook: "https://www.facebook.com/aditi.chatterjee.397501",
              linkedin: "https://www.linkedin.com/in/aditi-chatterjee-734b3b209/",
              github: "https://github.com/aditi20072001"
            }}
          />

          {/* Charchika Biswas */}
          <DevDetail
            devData={{
              image: "./Images/Charchika.jpg",
              name: "Charchika Biswas",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
              facebook: "https://www.facebook.com/charchika.biswas.9",
              linkedin: "https://www.linkedin.com/in/charchika-biswas-6014ba209/",
              github: "https://github.com/CharchikaBiswas"
            }}
          />

          {/* Kaustav Halder */}
          <DevDetail
            devData={{
              image: "./Images/Kaustav.png",
              name: "Kaustav Halder",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
              facebook: "https://www.facebook.com/kaustav.halder.902",
              linkedin: "https://www.linkedin.com/in/kaustav-halder-593975204/",
              github: "https://github.com/HALDERKAUSTAV"
            }}
          />

          {/* Sourashis Paul */}
          <DevDetail
            devData={{
              image: "./Images/Sourashis.jpg",
              name: "Sourashis Paul",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
              facebook: "https://www.facebook.com/riju.paul.1401",
              linkedin: "https://www.linkedin.com/in/sourashis-paul-6723a31b1/",
              github: "https://github.com/sourashis02"
            }}
          />

          {/* Swapnodeep Biswas */}
          <DevDetail
            devData={{
              image: "./Images/Swapnodeep.jpeg",
              name: "Swapnodeep Biswas",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis",
              facebook: "https://www.facebook.com/Swapnodeep2017",
              linkedin: "https://www.linkedin.com/in/swapnodeep-biswas/",
              github: "https://github.com/Swapnodeep"
            }}
          />
        </div>

        {/* Footer with Project team info*/}
        <footer className={styles.footer}>
          <p className={styles.footer__text}>
            © 2022 DocValidateAPI. All rights reserved. <br />A project by Aditi
            Chatterjee, Charchika Biswas, Kaustav Halder, Sourashis Paul and
            Swapnodeep Biswas
          </p>
        </footer>
      </div>
    );
  }
}

function AboutNavigate() {
  const navigate = useNavigate();
  return (
    <div>
      <AboutSection navigate={navigate} />
    </div>
  );
}

export default AboutNavigate;
