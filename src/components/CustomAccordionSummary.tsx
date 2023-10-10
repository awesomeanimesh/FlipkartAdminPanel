import { Button, Stack } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";

import React from "react";
import "./sidenav.css";

interface CustomAccordionSummaryProps {
  title: string;
  subtitle: string;
  isButton?: boolean;
}

function CustomAccordionSummary(props: CustomAccordionSummaryProps) {
  const { title, subtitle, isButton } = props;
  return (
    <AccordionSummary
      expandIcon={
        <img
          src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696885524/FlipkartAdmin/Group_10163_si62oj.svg"
          alt="expandicon"
        />
      }
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Stack
        mr={2}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </Stack>
        {isButton && (
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{
                border: "1px solid #DADCE0",
                color: "#276EF1",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textTransform: "capitalize",
                fontSize: "16px ",
              }}
              variant="outlined"
            >
              <img
                src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696930111/FlipkartAdmin/upload_black_24dp_ekxeqx.svg"
                alt="uploadLogo"
              />{" "}
              Bulk Upload
            </Button>
            <Button
              sx={{
                color: "#fff",
                fontFamily: "Open Sans",
                fontWeight: "400",
                textTransform: "capitalize",
                fontSize: "16px ",
              }}
              variant="contained"
            >
              <img
                src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696930469/FlipkartAdmin/save_black_24dp_nibocj.svg"
                alt="Save logo"
              />{" "}
              Save
            </Button>
          </Stack>
        )}
      </Stack>
    </AccordionSummary>
  );
}

export default CustomAccordionSummary;
