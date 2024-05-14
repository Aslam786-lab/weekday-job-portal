import { Box, Typography } from "@mui/material";
import React from "react";

export default function JDDetails({ jdItem }) {
  return (
    <>
      <JDDetailsHeader
        logoUrl={jdItem.logoUrl}
        companyName={jdItem.companyName}
        jobRole={jdItem.jobRole}
        location={jdItem.location}
      />
      <Typography marginTop={1} color={"grey"}>
        Estimated Salary: ${jdItem.minJdSalary} - {jdItem.maxJdSalary} LPA ✅
      </Typography>
      <CompanyDetails jobDetailsFromCompany={jdItem.jobDetailsFromCompany}/>
    </>
  );
}

function JDDetailsHeader({ logoUrl, companyName, jobRole, location }) {
  return (
    <Box display={"flex"}>
      <img src={logoUrl} width={25} height={40}></img>
      <Box marginLeft={"10px"}>
        <Typography fontWeight={"550"} letterSpacing={"1px"} color={"grey"}>
          {companyName}
        </Typography>
        <Typography sx={{ textTransform: "capitalize" }} fontSize={"16px"}>
          {jobRole}
        </Typography>
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          {location}
        </Typography>
      </Box>
    </Box>
  );
}

function CompanyDetails({ jobDetailsFromCompany }) {
  return (
    <>
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
        {jobDetailsFromCompany}
      </Typography>
    </>
  );
}
