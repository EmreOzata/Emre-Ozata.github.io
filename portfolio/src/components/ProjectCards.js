import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFileText } from "react-icons/bs";     
import { AiFillPlayCircle } from "react-icons/ai"; 

function ProjectCard({ title, description, reportLink, demoLink }) {
  return (
    <Card className="project-card-view mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {/* Visa rapport-knapp om reportLink finns */}
        {reportLink && (
          <Button variant="primary" href={reportLink} target="_blank" className="me-2">
            <BsFileText /> Report
          </Button>
        )}

        {/* Visa video-knapp om demoLink finns */}
        {demoLink && (
          <Button variant="success" href={demoLink} target="_blank">
            <AiFillPlayCircle /> Video
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

