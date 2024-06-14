import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { headCells, rows } from "../Constant";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            padding="normal"
            sx={{ borderBottom: "none", pr: "10px", textAlign: "center" }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              {headCell.label}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        backgroundColor: "#E8EDF1",
        pr: { xs: 1, sm: 1 },
        display: "flex",
        justifyContent: "space-between",
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="قائمة التصفية">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        حجوزات المزارات
      </Typography>
    </Toolbar>
  );
}

const Tables = () => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = React.useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "white" }}>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <EnhancedTableHead numSelected={selected.length} />
          <TableBody>
            {visibleRows.map((row) => (
              <TableRow
                hover
                key={row.id}
                role="checkbox"
                tabIndex={-1}
                selected={isSelected(row.id)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell
                  align="right"
                  sx={{ borderBottom: "none", textAlign: "center" }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    <IconButton>
                      <AddBoxSharpIcon style={{ color: "#03AA77" }} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon style={{ color: "#F44242" }} />
                    </IconButton>
                    {row.date}
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "none", textAlign: "center" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", px: "50px" }}
                  >
                    {row.type}
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "none", textAlign: "center" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", px: "50px" }}
                  >
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "none", textAlign: "center" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", px: "50px" }}
                  >
                    {row.id}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ marginLeft: 2, backgroundColor: "#E8EDF1", marginTop: "30px" }} // Adjusting margin to move TablePagination to the far left
      />
    </Box>
  );
};

export default Tables;
