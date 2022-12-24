import { Box, Typography } from "@mui/material";

const StatBox = ({ subtitle, icon,  increase }) => {

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography fontSize={"18px"} sx="black">
          {subtitle}
        </Typography>
        <Typography
          fontSize={"18px"}
          fontStyle="italic"
          sx="black"
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
