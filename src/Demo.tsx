import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

const levels = [
  {
    name: "Introduction to Health and Safety",
    items: [
      {
        name: "Course Introduction Video",
        viewed: "10/09/2023"
      },
      {
        name: "Health and Safety PDF Guide",
        viewed: "10/09/2023"
      },
      {
        name: "Quick Tips for Workplace Safety Infographic",
        viewed: "10/09/2023"
      }
    ]
  },
  {
    name: "Hazard Identification and Risk Assessment",
    items: [
      {
        name: "Hazard Identification Video Tutorial and Quiz",
        viewed: "10/09/2023"
      },
      {
        name:
          "Guide to Conducting Workplace Risk Assessments and Hazard Control",
        viewed: "10/09/2023"
      },
      {
        name: "Risk Assessment Templates and Checklists PDF",
        viewed: "10/09/2023"
      }
    ]
  },
  {
    name: "Workplace Health and Safety Regulations",
    items: [
      {
        name:
          "Workplace Health and Safety Laws and Compliance Requirements Interactive Presentation",
        viewed: "10/09/2023"
      },
      {
        name: "Workplace Health and Safety Regulations Summary PDF",
        viewed: "10/09/2023"
      },
      {
        name: "Workplace Safety Standards and Requirements Video",
        viewed: "10/09/2023"
      }
    ]
  }
];

const LearningExperience = ({ levels }) => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        sx={{ fontWeight: 100, marginTop: 5, marginBottom: 1 }}
      >
        Joe Bloggs
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 300 }}>
        joe.bloggs@email.com
      </Typography>

      <Typography sx={{ fontSize: 24, marginBottom: 3, marginTop: 6 }}>
        Learning Experience Name
      </Typography>

      {levels.map((level) => (
        <Accordion
          key={level.name}
          sx={{
            backgroundColor: "#F3F3F3",
            marginBottom: 1
          }}
        >
          <AccordionSummary
            sx={{ paddingLeft: 2 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontSize: 16, padding: 1 }}>
              {level.name}
            </Typography>
          </AccordionSummary>

          {level.items.map((item) => (
            <Card key={item.name} sx={{ margin: 2 }}>
              <CardContent sx={{ marginLeft: 2 }}>
                <AccordionDetails sx={{ color: "000" }}>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.viewed}</Typography>
                </AccordionDetails>
              </CardContent>
            </Card>
          ))}
        </Accordion>
      ))}
    </Container>
  );
};

export default () => {
  return <LearningExperience levels={levels} />;
};
