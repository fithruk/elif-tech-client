import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function AppPagination({ page, handleChange, size }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={size}
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
