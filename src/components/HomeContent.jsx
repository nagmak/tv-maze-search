import React, { useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { DropdownMenu } from "./DropdownMenu";

export const HomeContent = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback(async (query) => {
    if (!query) {
      alert("Please enter a query before pressing search");
    }
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${query}`
    );
    
    setSearchResults(data);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" component="h1" color="darksalmon">
        TV Maze Search
      </Typography>
      <DropdownMenu sx={{ marginRight: '8px'}}/>
      <SearchBar onSearch={handleSearch} />
      <div style={{ marginTop: "120px" }} />
      {searchResults?.length ? <SearchResults tvShows={searchResults} /> : null}
    </Box>
  );
};
