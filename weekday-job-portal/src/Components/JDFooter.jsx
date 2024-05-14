import { Box, Button, Typography } from "@mui/material";
import image from '../assets/image.png';
import image2 from '../assets/image2.png';

export default function JDFooter({minimunExp}) {
  return (
    <Box className='view-more'>
      <Typography textAlign={"center"} marginBottom={"10px"}>
        <a href="#" style={{ textDecoration: "none" }}>
          View job
        </a>
      </Typography>
      <Typography color={"grey"}>Minimum Experience</Typography>
      <Typography>{minimunExp} Years</Typography>
      <Button
        variant="outlined"
        size="large"
        fullWidth
        className="apply-btn"
        sx={{ 
          backgroundColor: "#55EFC4", 
          marginTop: "10px",  
          "&:hover": {
          backgroundColor: "#55EFC4" 
          } 
        }}
      >
        <Typography
          fontSize={"16px"}
          sx={{ color: "black", textTransform: "none" }}
        >
          ⚡ Easy Apply
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="large"
        fullWidth
        sx={{ 
          backgroundColor: "#1307f2", 
          marginTop: "5px",
          "&:hover": {
            backgroundColor: "#1307f2" // Remove the hover effect by keeping the same background color
          }
        }}
        startIcon={<AccountCircleIcon/>  }
      >
        <Typography
          fontSize={"16px"}
          sx={{ color: "white", textTransform: "none" }}
        >
          Unlock referral asks
        </Typography>
      </Button>
    </Box>
  );
}

function AccountCircleIcon() {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} >
      <img style={{marginRight: '5px', borderRadius: '50%', opacity:'0.5'}} width={20} height={20} src={image} alt="Image 1" />
      <img style={{ borderRadius: '50%', opacity:'0.5'}}width={20} height={20} src={image2} alt="Image 2" />
    </Box>
  );
}