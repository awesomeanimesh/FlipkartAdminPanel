import React from "react";
import "./home.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CustomAccordionSummary from "../../components/CustomAccordionSummary";
import { Stack } from "@mui/material";
import OrgSetupDetails from "../../components/OrgSetupDetails";

const jsonData = [
  {
    title: "Details",
    subtitle: "Page to configure all the company details",
  },
  {
    title: "Lock Setup",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Integration Info",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "All Info",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Home() {
  return (
    <div>
      <div className="setup">Org Setup</div>
      <div>
        <Accordion>
          <CustomAccordionSummary
            title={jsonData[0].title}
            subtitle={jsonData[0].subtitle}
            isButton={true}
          />
          <AccordionDetails>
            <div style={{ display: "flex", margin: "0% 10%" }}>
              <OrgSetupDetails />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <CustomAccordionSummary
            title={jsonData[1].title}
            subtitle={jsonData[1].subtitle}
            isButton={false}
          />
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <CustomAccordionSummary
            title={jsonData[2].title}
            subtitle={jsonData[2].subtitle}
            isButton={false}
          />
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <CustomAccordionSummary
            title={jsonData[3].title}
            subtitle={jsonData[3].subtitle}
            isButton={false}
          />
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <img
        src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696886067/FlipkartAdmin/Group_10166_qwzgis.svg"
        style={{ paddingLeft: "1rem" }}
      />
    </div>
  );
}

export default Home;
