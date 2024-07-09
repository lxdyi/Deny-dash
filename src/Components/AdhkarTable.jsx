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
import UpdateAdhdhkar from "./UpdateAdhdhkar";
import DeleteAdhdhkar from "./DeleteAdhdhkar";
import AdhdhkarPlay from "./AdhdhkarPlay";
function EnhancedTableHead({ headCells }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="right"
            padding="normal"
            sx={{ borderBottom: "none", pr: "60px", textAlign: "center" }}
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

const AdhkarTable = ({ headCells, rows, type }) => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedAdh, setSelectedAdh] = React.useState(null);
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
    [page, rowsPerPage, rows]
  );
  const handleCellClick = (row) => {
    setSelectedAdh(row);
  };

  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "white" }}>
      
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              headCells={headCells}
              numSelected={selected.length}
            />
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
                    <div className="flex items-center gap-3 ml-10">
                      <UpdateAdhdhkar type={type} id={row.id} />
                      <DeleteAdhdhkar id={row.id} />
                    </div>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none", textAlign: "center" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", pr: "60px" }}
                    >
                      {row.number}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none" }}
                    onClick={() => handleCellClick(row)}
                  >
                    <img
                      src={`http://quranapp.somee.com/files/${row.image}`}
                      alt="Placeholder"
                      className="w-20 h-20 relative left-[50px]"
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none", textAlign: "center" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", pr: "50px" }}
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
        />
      </Box>
      {selectedAdh && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 flex  justify-center overflow-auto">
          <div className="w-[700px] h-fit rounded-lg bg-white flex justify-center mt-4 ">
            <AdhdhkarPlay
              Adhdhkar={selectedAdh}
              setSelectedAdh={setSelectedAdh}
              type={type}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdhkarTable;
