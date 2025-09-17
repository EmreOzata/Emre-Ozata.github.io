import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";


function Projects() {
  const myProjects = [
    {
      title: "Prototyp för ett administrativt system",
      description: "En prototyp av ett administrativt skolystem som bygger på att lära sig MVC mönstret, utvecklades i Java.",
      reportLink: process.env.PUBLIC_URL + "/docs/Obj-orientering-Projekt-rapport - Emre Özata.pdf",
      demoLink: "https://www.youtube.com/watch?v=DqWJmNmeX9A",
    },
    {
      title: "Sports Application",
      description: "En sportsapplikation som utvecklades i Kotlin. Denna applikation visar matcher inom utvalda sportsligor.",
     reportLink: process.env.PUBLIC_URL + "/docs/rapport_klientutveckling.pdf",
    },
    {
      title: "Cleaning Manager",
      description: "Utvecklades där vi skulle arbeta likt ett team med backend. Projektet utfördes enligt SCRUM metodik.",
      reportLink: process.env.PUBLIC_URL + "/docs/ProjektPVT.pdf",
    },
    {
      title: "Databashantering",
      description: "Ett projekt där vi skulle strukturera upp en databas som kan hantera lärare och elever.",
      reportLink: process.env.PUBLIC_URL + "/docs/Rapport_Databasteknik.pdf",
    }
  ];

  return (
    <Container>
      <h1>Mina projekt</h1>
      <Row>
        {myProjects.map((proj, idx) => (
          <Col md={4} key={idx} className="project-card">
            <ProjectCard
              title={proj.title}
              description={proj.description}
              reportLink={proj.reportLink}
              demoLink={proj.demoLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
