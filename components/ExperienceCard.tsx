import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="6">
      <Card style={{ flex: 1 }} className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100">
        <CardBody className="">
            <div className="shadow mb-3" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "8rem", // Adjust the width and height of the circle as needed
              height: "8rem",
              borderRadius: "50%", // Creates a circle shape
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Adds a shadow effect
              overflow: "hidden", // Ensures the image stays within the 
              marginLeft: "auto",
                          marginRight: "auto",
            }}>
            <img
              src={companyLogo}
              style={{
                width: "100px", // Ensures the image fills the container
                height: "auto", // Allows the image to maintain its aspect ratio
              }}
              alt={companyLogo}
            />
    </div>
          {/* <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              left: 0,
              right: 0,
              top: "7rem",
              marginLeft: "auto",
              marginRight: "auto",
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          /> */}
          <CardTitle tag="h4" className="mb-2">
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2">
            {role}
          </CardSubtitle>
          <CardSubtitle>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-left">
            {desc}
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
