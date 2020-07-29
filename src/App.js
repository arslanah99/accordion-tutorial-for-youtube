import React, { useState, useEffect } from "react";
import "./App.css";
import { Accordion, Card } from "react-bootstrap";
import axios from "axios";

const App = () => {
  const [teamData, setTeamData] = useState([]);

  const nbaData = async () => {
    const response = await axios.get(
      "https://www.balldontlie.io/api/v1/teams/"
    );

    setTeamData(response.data.data);
  };

  const renderAccordion = (team, index) => {
    return (
      <Accordion key={index}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={team}>
            {team.city} <i>+</i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={team}>
            <Card.Body>
              <ul>
                <li>{team.abbreviation}</li>
                <li>{team.city}</li>
                <li>{team.conference}</li>
                <li>{team.division}</li>
                <li>{team.full_name}</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  useEffect(() => {
    nbaData();
  }, []);

  return <div className="App">{teamData.map(renderAccordion)}</div>;
};

export default App;
