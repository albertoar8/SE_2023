import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-multiline-static"
          label="Recipe Name"
          multiline
          maxRows={1}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Ingredients"
          placeholder={null}
          multiline
          rows={5}
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Procedure"
          multiline
          rows={5}
          defaultValue={null}
          variant="filled"
        />
      </div>
      <div>
        <Button variant="outlined" >Save New Recipe</Button>
      </div >
    </Box>
  );
}
