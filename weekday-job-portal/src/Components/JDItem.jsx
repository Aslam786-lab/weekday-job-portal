import { Box, Grid, Paper } from "@mui/material";
import JDDetails from "./JDDetails";
import JDFooter from "./JDFooter";



export default function JDItem({ jdItem }) {

  return (
    <Grid item>
      <Box className="jd-card">
        <Paper elevation={2} className="jd-paper">
          <JDPost />
          <JDDetails jdItem={jdItem}/>
          <JDFooter minimunExp={jdItem.minExp}/>
        </Paper>
      </Box>
    </Grid>
  );
}

function JDPost() {

  return (
    <Box className="post-card">
      <Paper className="post-paper">
        <p style={{ fontSize: "9px" }}>⏳ Posted 6 days ago</p>
      </Paper>
    </Box>
  );
}
