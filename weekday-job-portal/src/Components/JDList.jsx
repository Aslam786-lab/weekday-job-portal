import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@mui/material'
import { fetchJdRequest } from '../redux/jdState';
import JDItem from './JDItem';

export default function JDList() {
    const { jdList } = useSelector(state => state.jd)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJdRequest())
    }, [])

  return (
    <Grid container sx={{ marginTop: "40px" }}>
      {jdList.length ? 
      jdList.map((jdItem, index) => (
        <JDItem key={index} jdItem={jdItem} />
      )) : <CircularProgress />}
    </Grid>
  )
}

