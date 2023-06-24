import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import parse from 'html-react-parser';
import { ShowContentCard } from './ShowContentCard'

export const ShowContent = (props) => {
  const showContent = props.props;
  const [domLoaded, setDomLoaded] = useState(false);
  let showSummary;

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (domLoaded) {
    showSummary = parse(showContent.summary);
  }


  console.log(showContent)
  return (
    <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1">
        { showContent.name }
      </Typography>
      <div style={{ marginTop: "120px" }} />
    </Box>
    <Stack direction="row" spacing={2}>
    <Box
        component="img"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt={showContent.name}
        src={showContent.image.original}
      />
    <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <Typography variant="body1">
        { showSummary ? showSummary: null }
        </Typography>
        <div style={{ marginTop: "120px" }} />
      </Box>
      <ShowContentCard props={showContent}></ShowContentCard>
      </Stack>
      </>
  );
};
