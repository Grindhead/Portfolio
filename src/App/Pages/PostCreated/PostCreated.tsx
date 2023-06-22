import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const PostCreated = () => {
  return (
    <div>
      <Typography variant="h2">Post Created</Typography>
      <Link to={Pages.HOME}>Return to Homepage</Link>
    </div>
  );
};

export default PostCreated;
