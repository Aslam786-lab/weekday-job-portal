import { Grid } from '@mui/material'
import SelectionFilter from './SelectionFilter'
import { filterObject } from '../../constants'
import CompanySearch from './CompanySearch'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { applyFilter } from '../../redux/jdState';

export default function JDFilter() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    roles: [],
    experience: [],
    remote: [],
    minimumbasepaysalary: [],
    searchcompanyname: ''
  });

  const getFilterItem = (placeholderVal, newValue) => {
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        [placeholderVal.toLowerCase()]: newValue,
      };
    });
  };

  useEffect(() => {
    dispatch(applyFilter(filters));
  },[filters])

  return (
    <Grid container spacing={1} sx={{ marginLeft: '10px'}}>
      {filterObject.map((filterItem, index) => (
        <SelectionFilter key={index} filterItem={filterItem} index={index} getFilterItem={getFilterItem}/>
      ))}
      <CompanySearch getFilterItem={getFilterItem}/>
    </Grid>
  )
}
