// ...existing code...
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { evaluate as mathEvaluate } from "mathjs";

const App = () => {
  const [value, setValue] = useState("");

  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let operators = ["+", "-", "*", "/", "%"];

  const clearValue = () => {
    setValue("");
  };

const evaluate = () => {
  try {
    const result = mathEvaluate(value);
    setValue(result.toString());
  } catch (err) {
    setValue("Error");
  }
};

  return (
    <div>
      <div className="flex justify-center">
        {/* Change the container to a column layout and center items */}
        <div className="bg-[#f0f3ff] flex flex-col items-center w-150 h-100 mt-18 rounded-2xl shadow-1xl p-6 gap-4">
          <div className="section-1">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "35ch" },
                borderRadius: "20px",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="filled-basic"
                variant="filled"
                value={value} // <-- This shows the current expression
                type="text" // <-- Needed to allow symbols like + - * /
                // InputProps={{ readOnly: true }} // Optional: prevent manual typing
              />
            </Box>
          </div>
          <div className="section-2">
            <div className="buttons flex flex-wrap gap-4 justify-center">
              {digits.map((val) => {
                return (
                  <Button
                    onClick={() => setValue(value + val)}
                    key={val}
                    variant="outlined"
                    size="small"
                  >
                    {val}
                  </Button>
                );
              })}
              {operators.map((val) => {
                return (
                  <Button
                    onClick={() => setValue(value + val)}
                    key={val}
                    variant="outlined"
                    size="small"
                  >
                    {val}
                  </Button>
                );
              })}
              <Button onClick={clearValue} variant="outlined">
                clear
              </Button>

              <Button onClick={evaluate} variant="outlined">
                =
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
// ...existing code...
