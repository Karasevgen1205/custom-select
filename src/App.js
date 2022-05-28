import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@mui/styles";
import SelectComponent from "./Select";

// const useRedMultiValueStyles = makeStyles({
//   tag: {
//     backgroundColor: "red",
//     color: "white",
//   },
// });

const App = () => {
  // const [value, setValue] = useState([]);

  // const options = [{ label: "Show" }, { label: "Hide" }];
  // const classes = useRedMultiValueStyles();
  // console.log(value);

  return (
    <div className="App">
      <SelectComponent />
      {/* <Autocomplete
        multiple
        options={options}
        classes={{
          tag: true ? classes.tag : styles,
        }}
        // renderTags={(value, getTagProps) => {
        //   console.log(value, getTagProps);
        //   value.map((option, index) => (
        //     <Chip
        //       variant="outlined"
        //       label={option}
        //       {...getTagProps({ index })}
        //     />
        //   ));
        // }}
        // value={value}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        sx={{
          width: 300,
        }}
        onChange={(event, values, selectOption, options, d, e, f) => {
          // console.log(value, values, options);
          // setValue([options.option]);
          // if (values.length > 1) {
          //   values = values[1];
          // }
        }}
        // onInputChange={(event, newInputValue, reason) => {
        //   console.log(event, newInputValue, reason);
        //   // if (reason === 'reset') {
        //   //   setValue('')
        //   //   return
        //   // } else {
        //   //   setValue(newInputValue)
        //   // }
        // }}
      /> */}
    </div>
  );
};

export default App;
