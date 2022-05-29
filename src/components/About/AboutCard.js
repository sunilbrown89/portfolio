import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sunil Sahu </span>
            from <span className="purple"> Berhampur, India.</span>
            <br />I am pursuing Full stack web development course from Masai School,Bengaluru.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watering plants
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sunil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
