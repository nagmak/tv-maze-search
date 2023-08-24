import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import parse from 'html-react-parser';
import { ShowContentCard } from './ShowContentCard'

export const ShowContent = (props) => {
  const { showContent } = props;

  // Checks if the DOM is loaded before parsing the summary string
  const [domLoaded, setDomLoaded] = useState(false);
  let showSummary;

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded && showContent?.summary) {
    showSummary = parse(showContent?.summary);
  }

  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px"
      }}
    >
      <Typography variant="h3" component="h1" color="darksalmon">
        { showContent?.name ? showContent.name : null }
      </Typography>
      <div style={{ marginTop: "120px" }} />
    </Box>
    <Stack sx={{flexDirection: { xs: "column", md: "row", lg: "row"}}} spacing={2}>
    <div className="img-container-show-content">
    <Box
        component="img"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row"},
          justifyContent: "start",
          alignItems: "start",
          maxWidth: { xs: 350, md: 250 },
          padding: "24px",
          maxHeight: { md: 400 },
        }}
        alt={showContent?.name ? showContent.name: ''}
        src={showContent?.image?.original || showContent?.image?.medium}
      />
      </div>
    <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row"},
          justifyContent: "start",
          alignItems: "start",
          padding: "24px"
        }}
      >
        <Typography variant="body1" color="darksalmon">
        { showSummary ? showSummary: null }
        </Typography>
        <div style={{ marginTop: "120px" }} />
      </Box>
      <ShowContentCard showContent={showContent}></ShowContentCard>
      </Stack>
      </>
  );
};
