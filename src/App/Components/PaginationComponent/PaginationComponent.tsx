import "./PaginationComponent.css";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationComponentProps = {
  handleChange: (page: number) => void;
  count: number;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
  handleChange,
  count,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        className="pagination"
        count={Math.floor(count)}
        onChange={(e: React.ChangeEvent<unknown>, value: number) =>
          handleChange(value)
        }
      />
    </Stack>
  );
};
