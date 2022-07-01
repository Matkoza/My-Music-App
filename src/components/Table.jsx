import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailsModal from './DetailsModal';

const columns = [
  { field: 'song_name', headerName: 'Song', width: 130 },
  { field: 'artist_name', headerName: 'Artist', width: 130 },
  { field: 'rating', headerName: 'Rating', width: 130 }

];

export default function SongTable({songDetails}) {
const rows = [...songDetails]; 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="left" key={column.field}>
                {column.headerName}
              </TableCell>

          ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.song_name}</TableCell>
              <TableCell align="left">{row.artist_name}</TableCell>
              <TableCell align="left">{row.rating}</TableCell>
              <TableCell align="left"><DetailsModal songDetails={row}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}