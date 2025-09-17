import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <Container className="my-5">
      <section id="about">
        <h1>Om mig</h1>
        <p>
          Jag heter Emre Özata och studerar Dataingenjörsprogrammet (180 hp) vid 
          Högskolan i Gävle. Utbildningen kombinerar datavetenskap, matematik 
          och elektronik, och förbereder mig för en karriär som högskoleingenjör 
          inom IT och systemutveckling.
        </p>
        <p>
          Genom programmet utvecklar jag en bred kompetens inom programmering, 
          systemutveckling och projektarbete, med fokus på både praktiska och 
          teoretiska moment. Jag brinner för problemlösning, teknik och 
          utveckling av innovativa system.
        </p>
      </section>
    </Container>
  );
}

export default About;
