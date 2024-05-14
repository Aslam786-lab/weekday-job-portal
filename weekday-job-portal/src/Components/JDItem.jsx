import { Box, Grid, Paper } from "@mui/material";
import React, { useCallback, useRef } from "react";
import JDDetails from "./JDDetails";
import JDFooter from "./JDFooter";
import { useDispatch, useSelector } from "react-redux";
import { fetchJdRequest } from "../redux/jdState";

export default function JDItem({ jdItem, jdList, index }) {
  const isLastJd = jdList.length === index + 1;

  return (
    <Grid item>
      <Box className="jd-card">
        <Paper elevation={2} className="jd-paper">
          <JDPost isLastJd={isLastJd}/>
          <JDDetails jdItem={jdItem}/>
          <JDFooter minimunExp={jdItem.minExp}/>
        </Paper>
      </Box>
    </Grid>
  );
}

function JDPost({ isLastJd }) {
  const observer = useRef();
  const dispatch = useDispatch();
  const { offset , totalCount} = useSelector(state => state.jd)

  const infiniteScroll = useCallback((node) =>{
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((enteries) => {
      if(enteries[0].isIntersecting) {
        if(offset < totalCount-1) {
          dispatch(fetchJdRequest());
        }
      }
    });
      if (node) observer.current.observe(node);
  }, [])

  return (
    <Box className="post-card">
      <Paper className="post-paper">
        {isLastJd ?
        <p ref={infiniteScroll} style={{ fontSize: "9px" }}>⏳ Posted 6 days ago</p>:
        <p style={{ fontSize: "9px" }}>⏳ Posted 6 days ago</p>}
      </Paper>
    </Box>
  );
}
