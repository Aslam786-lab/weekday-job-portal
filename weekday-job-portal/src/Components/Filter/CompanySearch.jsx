import { Grid, TextField, debounce } from "@mui/material";
import { useCallback } from "react";

function CompanySearch({ getFilterItem }) {
  
  const debouncedSearch = useCallback(
    debounce(value => getFilterItem('searchcompanyname', value), 1000),[]
  )

  const handleChange = (e) => {
    if(e.target.value) {
      debouncedSearch(e.target.value);
    }
  }
  return (
    <Grid item>
      <TextField
        className="company-search"
        placeholder="Search Company Name"
        onChange={handleChange}
        InputProps={{
          style: { fontSize: "12px", height: "37px" },
        }}
      />
    </Grid> 
  );
}

export default CompanySearch;
