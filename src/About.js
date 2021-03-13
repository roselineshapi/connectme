import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
//   display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>Hello There. Welcome to ConnectMe!</h2>
    <br>
    </br>
    <h3>About Connect</h3>
    <p>ConnectMe is  an initiative to help students get resources that could help them land their dream internship, co-op or full time Job.</p>
    <p>ConnectMe has wide resource for externships opportunities. Externships are two days to one week conference that are held by several companies.</p>
    <p>They are an opportunity for students to get to know a company. </p>
    <p>Unfortunately, these externships are often marketed to a few people if at all, they are difficult to come accross. In order to cub these problems, we have creates connectme website. This website will help students have easy access to externship programs.</p>
    
    <br></br>
    <h3>Meet our Team</h3>
    <h4>Roseline Shapi</h4>
    <p>Roseline Shapi is a computer science student at Mississippi Valley State University. She is currently in her third year.</p>
  </GridWrapper>
)
