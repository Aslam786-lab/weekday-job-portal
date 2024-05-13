import { Autocomplete, Grid, Paper, TextField } from '@mui/material'



export default function SelectionFilter({ filterItem, index }) {

  
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
        // onChange={handleChange}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        PaperComponent={(props) => (
            <Paper 
            sx={{
              marginTop: '10px',
              '& .MuiAutocomplete-listbox li:hover': {
                backgroundColor: '#daf5f1',
              }
            }}
            {...props}
          />
        )}
        renderInput={(params) => (
            <TextField 
            {...params}
            placeholder={params.InputProps.startAdornment?.length ? '' : filterItem.placeholder}
          />
        )}
      />
    </Grid>
  )
}

