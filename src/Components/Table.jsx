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

import Typography from "@mui/material/Typography";

import DeleteSurah from "./DeleteSurah";
import UpdateSurah from "./UpdateSurah";
import SurahPlayer from "./SurahPlayer";

function EnhancedTableHead({ headCells }) {
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

const Tables = ({ headCells, rows }) => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selectedSurah, setSelectedSurah] = React.useState(null);

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
    setSelectedSurah(row);
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
                    sx={{
                      borderBottom: "none",
                      textAlign: "center",
                      display: "flex",
                      gap: "5px",
                      marginTop:"18px"
                    }}
                  >
                    <DeleteSurah id={row.id} />
                    <UpdateSurah id={row.id} />
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none", textAlign: "center" }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
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
                      {row.ayat}
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
                      {row.type === "Makiya"
                        ? "مكية"
                        : row.type === "Madania"
                        ? "مدنية"
                        : row.type}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none", textAlign: "center" }}
                    onClick={() => handleCellClick(row)}
                  >
                    <video className="w-20 h-20">
                      <source
                        src={`http://quranapp.somee.com/files/${row.File}`}
                        type="video/mp4"
                      />
                    </video>
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
        
        />
      </Box>
      {selectedSurah && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-800 bg-opacity-50 flex  justify-center overflow-auto">
          <div className="w-[700px] h-fit rounded-lg bg-white flex justify-center mt-4 ">
            <SurahPlayer
              surah={selectedSurah}
              setSelectedSurah={setSelectedSurah}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Tables;
