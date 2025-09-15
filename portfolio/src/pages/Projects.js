import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";


function Projects() {
  const myProjects = [
    {
      title: "Prototyp för ett administrativt system",
      description: "En prototyp av ett administrativt skolystem som bygger på att lära sig MVC mönstret, utvecklades i Java.",
      reportLink: "/assets/reports/admin-system.pdf",
      demoLink: "https://www.youtube.com/watch?v=DqWJmNmeX9A",
    },
    {
      title: "Sports Application",
      description: "En sportsapplikation som utvecklades i Kotlin.",
      reportLink: "/assets/reports/sports-app.pdf",
      demoLink: "https://youtu.be/exampleVideo2",
    },
    {
      title: "Cleaning Manager",
      description: "Utvecklades där vi skulle arbeta likt ett team med backend. Projektet utfördes enligt SCRUM metodik.",
      reportLink: "/assets/reports/cleaning-manager.pdf",
      demoLink: "https://youtu.be/exampleVideo3",
    },
  ];

  return (
    <Container>
      <h1>My Projects</h1>
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
