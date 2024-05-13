import { Grid, TextField } from "@mui/material";

function CompanySearch() {
  return (
    <Grid item>
      <TextField
        className="company-search"
        placeholder="Search Company Name"
        InputProps={{
          style: { fontSize: "12px", height: "37px" },
        }}
      />
    </Grid> 
  );
}

export default CompanySearch;
