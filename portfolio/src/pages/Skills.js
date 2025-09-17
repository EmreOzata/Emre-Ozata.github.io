import React from "react";
import { Container, Table } from "react-bootstrap";

function Skills() {
  return (
    <Container className="my-5">
      <section id="skills">
        <h2>Mina färdigheter</h2>
        <ul>
          <li>Programmeringsspråk: Java, Kotlin, JavaScript</li>
          <li>Webbutveckling: React, Node.js, HTML, CSS</li>
          <li>Databaser: SQL, PostgreSQL</li>
          <li>Mobilutveckling: Android (Kotlin/Java)</li>
          <li>Övrigt: Git, Scrum, Agil utveckling</li>
        </ul>

        <h3>Kurser inom programmet</h3>
        <p>Alla kurser jag har läst under utbildningen:</p>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Kursnamn</th>
              <th>Poäng</th>
              <th>Område</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Programmeringsmetodik</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Algebra och geometri</td><td>7.5 hp</td><td>Matematik</td></tr>
            <tr><td>Linjär algebra</td><td>7.5 hp</td><td>Matematik</td></tr>
            <tr><td>Datorsystem</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Envariabelanalys</td><td>7.5 hp</td><td>Matematik</td></tr>
            <tr><td>Elektrisk kretsteori</td><td>7.5 hp</td><td>Elektronik</td></tr>
            <tr><td>Introduktion till virtualisering och molntjänster</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Inbyggda system</td><td>7.5 hp</td><td>Elektronik</td></tr>

            <tr><td>Databasteknik</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Objektorienterad design och programmering</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Algoritmer och datastrukturer</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Klientutveckling på mobila enheter</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Introduktion till datakommunikation</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Programvaruteknik - utveckling och underhåll av programvara</td><td>15 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Funktionell programmering och diskret matematik</td><td>7.5 hp</td><td>Datavetenskap, Matematik</td></tr>

            <tr><td>Avancerad webbutveckling med ramverk</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Datavisualisering - design och konstruktion</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Projektkurs inom datavetenskap</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Datakommunikation och IT-säkerhet</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Objektorienterad design och programmering II</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Vetenskaplig metod och skrivande för dataingenjörer</td><td>7.5 hp</td><td>Datavetenskap</td></tr>
            <tr><td>Examensarbete för högskoleingenjörsexamen i Datavetenskap</td><td>15 hp</td><td>Datavetenskap</td></tr>
          </tbody>
        </Table>
      </section>
    </Container>
  );
}

export default Skills;
