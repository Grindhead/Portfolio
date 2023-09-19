import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const PostCreated = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h1">Post Created</Typography>
      <Typography variant="body1">
        <Link to={Pages.VIEW_POST + ":" + id}>View Your Post</Link>
      </Typography>
      <Typography variant="body1">
        <Link to={Pages.HOME}>Return to Homepage</Link>
      </Typography>
    </div>
  );
};

export default PostCreated;
