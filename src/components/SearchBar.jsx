import React, { useCallback, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { DropdownMenu } from "./DropdownMenu";

export const SearchBar = (props) => {
  const { onSearch } = props;
  const [input, setInput] = useState("");

  const handleInputChanged = useCallback(evt => {
    const { value } = evt.target;
    setInput(value);
  }, []);

  const handleSearchClicked = useCallback(evt => {
    evt.preventDefault();
    onSearch(input);
  }, [onSearch, input]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "480px",
        maxWidth: "100%",
        marginTop: "24px",
      }}
    >
      <DropdownMenu sx={{ marginRight: '8px'}}/>
      <TextField
        id="query"
        variant="outlined"
        placeholder="Search TVMaze"
        value={input}
        onChange={handleInputChanged}
        style={{ flex: 1, marginRight: '8px', marginLeft: '8px', background: 'darksalmon', color: 'darkslategray', borderRadius: '4px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClicked} sx={{ backgroundColor: 'darkslategray', color: 'darksalmon'}}>
        Search
      </Button>
    </Box>
  );
};
