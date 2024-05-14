import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@mui/material'
import { fetchJdRequest } from '../redux/jdState';
import JDItem from './JDItem';
import getFilteredJd from '../helper';

export default function JDList() {
    const { jdList, filters } = useSelector(state => state.jd)
    const [filteredJdList, setFilteredJdList] = useState(jdList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJdRequest())
    }, [])

    useEffect(() => {
     const filteredItem =  getFilteredJd(filters, jdList)
     setFilteredJdList(filteredItem)
    },[filters, jdList])

  return (
    <Grid container sx={{ marginTop: "40px" }}>
      {filteredJdList.length ? 
      filteredJdList.map((jdItem, index) => (
        <JDItem key={index} jdItem={jdItem} jdList={filteredJdList} index={index}/>
      )) : 
      <Grid item sx={{ margin: 'auto' }}>
      <CircularProgress/>
    </Grid>}
    </Grid>
  )
}

