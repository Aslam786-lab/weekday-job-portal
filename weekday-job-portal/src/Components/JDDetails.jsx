import { Box, Typography } from "@mui/material";
import React from "react";

export default function JDDetails({ jdItem }) {
  return (
    <>
      <Box display={"flex"}>
      <img src={jdItem.logoUrl} width={25} height={40}></img>
      <Box marginLeft={"10px"}>
        <Typography fontWeight={"550"} letterSpacing={"1px"} color={"grey"}>
          {jdItem.companyName}
        </Typography>
        <Typography sx={{ textTransform: "capitalize" }} fontSize={"16px"}>
          {jdItem.jobRole}
        </Typography>
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {jdItem.location}
        </Typography>
      </Box>
    </Box>
      <Typography marginTop={1} color={"grey"}>
        Estimated Salary: ${jdItem.minJdSalary} - {jdItem.maxJdSalary} LPA ✅
      </Typography>
      <Typography fontSize={"16px"} marginTop={"10px"}>
        About Company:
      </Typography>
      <Typography fontWeight={"bold"}>About us</Typography>
      <Typography style={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1))",
          }}
        />
        {jdItem.jobDetailsFromCompany}
      </Typography>
    </>
  );
}

