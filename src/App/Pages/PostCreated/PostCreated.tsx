import { Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Pages } from "../../Utils/Pages";

const PostCreated = () => {
  const { id } = useParams();

  return (
    <div>
      <Typography variant="h1">Post Created</Typography>
      <Link to={Pages.VIEW_POST + ":" + id}>View Your Post</Link>
      <br />
      <Link to={Pages.HOME}>Return to Homepage</Link>
    </div>
  );
};

export default PostCreated;
