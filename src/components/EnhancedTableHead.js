import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

const headCells = [
  {
    id: 'date',
    label: 'Tarikh',
  },
  {
    id: 'sourceFrom',
    label: 'Sumber',
  },
  {
    id: 'reporterName',
    label: 'Nama',
  },
  {
    id: 'serialNo',
    label: 'No Siri',
  },
  {
    id: 'referenceNo',
    label: 'No Rujukan Fail',
  },
  {
    id: 'category',
    label: 'Kategori',
  },
  {
    id: 'status',
    label: 'Status',
  },
];

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={'left'} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Typography fontWeight={'bolder'}>{headCell.label}</Typography>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
