import { Autocomplete, Grid, Paper, TextField } from '@mui/material'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function SelectionFilter({ filterItem, index, getFilterItem }) {
 

  const handleChange = (event, newValue) => {
    getFilterItem(filterItem.placeholder.replaceAll(" ",""), newValue);
  };

  
  return (
    <Grid item>
      <Autocomplete 
        className="autocomplete-container"
        role={filterItem.fieldWidth}
        sx={{ minWidth: `${filterItem.fieldWidth}px` }}
        size="small"
        key={`${index}-${filterItem.placeholder}-autocomplete`}
        multiple
        id="tags-outlined"
        options={filterItem.options}
        onChange={handleChange}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        popupIcon={<KeyboardArrowDownIcon color="disabled" />}
        PaperComponent={(props) => (
          <DropdownMenu props={props}/>
        )}
        renderInput={(params) => (
          <SearchInput params={params} placeholder={filterItem.placeholder}/>
        )}
      />
    </Grid>
  )
}



function DropdownMenu({props}) {
  return (
    <Paper 
    sx={{
      marginTop: '10px',
      '& .MuiAutocomplete-listbox li:hover': {
        backgroundColor: '#daf5f1',
      }
    }}
    {...props}
  />
  )
}

function SearchInput({params, placeholder}) {
  const placeholderVal = params.InputProps.startAdornment?.length ? '' : placeholder;
  return (
    <TextField 
      {...params}
      placeholder={placeholderVal}
    />
  )
}
