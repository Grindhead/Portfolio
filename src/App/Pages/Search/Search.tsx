import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const Search = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <Typography variant="h2">Search</Typography>
    </div>
  );
};

export default Search;
