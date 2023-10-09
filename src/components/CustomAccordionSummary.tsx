import { Stack } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React from 'react';
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
            expandIcon={<img src='https://res.cloudinary.com/dyaaypoqk/image/upload/v1696885524/FlipkartAdmin/Group_10163_si62oj.svg' />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        // sx={{ borderBottom: "1px solid #005BA6" }}
        >
            <Stack sx={{ borderBottom: "1px solid #005BA6" }}>
                <div className='title'>{title}</div>
                <Typography className='subtitle'>{subtitle}</Typography>
            </Stack>

        </AccordionSummary>
    );
}

export default CustomAccordionSummary;
