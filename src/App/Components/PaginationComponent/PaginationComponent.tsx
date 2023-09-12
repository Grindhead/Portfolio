import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type PaginationComponentProps = {
  handleChange: (page: number) => void;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  handleChange,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination count={2} onChange={(e) => handleChange(1)} />
    </Stack>
  );
};
