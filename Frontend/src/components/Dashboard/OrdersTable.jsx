import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import ordersData from '../../../../Backend/api/orders.api.js'; // Adjust the import path if necessary

// Column definitions
const columns = [
  {
    width: 150,
    label: 'Order Id',
    dataKey: '_id',
  },
  {
    width: 150,
    label: 'Order Type',
    dataKey: 'orderType',
  },
  {
    width: 150,
    label: 'Location',
    dataKey: 'location',
  },
  {
    width: 150,
    label: 'Request Date',
    dataKey: 'requestDate',
  },
  {
    width: 150,
    label: 'Status',
    dataKey: 'status',
  },
];

// Main component
export default function OrdersTable({orders}) {
  console.log('Orders received by OrdersTable:', orders);
  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align="left"
            style={{ width: column.width }}
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  // Row content for the table
  function rowContent(_index, row) {
    return (
      <>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align="left"
          >
            {column.dataKey === 'requestDate' ? (
            new Date(row[column.dataKey]).toLocaleDateString('en-GB') // Convert and format the date
          ) : (
            row ? row[column.dataKey] : 'N/A'
          )}
          </TableCell>
        ))}
      </>
    );
  }

  return (
    <Paper style={{ height: 400, width: '100%', marginTop: 0 }}>
      <TableVirtuoso
        data={orders}
        components={{
          Scroller: React.forwardRef((props, ref) => (
            <TableContainer component={Paper} {...props} ref={ref} />
          )),
          Table: (props) => (
            <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
          ),
          TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
          TableRow,
          TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
        }}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}

// OrdersTable.propTypes = {
//   orders: PropTypes.array.isRequired,
// };