import React from 'react'
import { Grid } from '@mui/material'
import { filterObject } from '../../constants'
import SelectionFilter from './SelectionFilter'

function JDFilter() {
  return (
    <Grid container spacing={1} sx={{ marginLeft: '10px'}}>
        {filterObject.map((filterItem, index) => (
            <SelectionFilter key={index} filterItem={filterItem} index={index} />
        ))}
    </Grid>
  )
}

export default JDFilter