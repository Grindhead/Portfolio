import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationComponentProps = {
  handleChange: (page: number) => void;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  handleChange,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination count={2} onChange={(e: React.ChangeEvent<unknown>, value: number) => handleChange(value)} />
    </Stack>
  );
};
