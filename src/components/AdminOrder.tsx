import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowParams,
  GridColDef,
  GridToolbarProps,
  MuiEvent,
} from '@mui/x-data-grid';

const statuses = ['Pending', 'Shipped', 'Delivered', 'Cancelled'];

const getRandomId = () => Math.random().toString(36).substr(2, 9);
const getRandomName = () => ['Alice', 'Bob', 'Charlie', 'David'][Math.floor(Math.random() * 4)];
const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];

interface RowData {
  id: string;
  customerName: string;
  orderDate: string;
  status: string;
  isNew?: boolean; // Optional property for tracking new rows
}

const initialRows: RowData[] = [
  {
    id: getRandomId(),
    customerName: getRandomName(),
    orderDate: new Date().toISOString().split('T')[0],
    status: getRandomStatus(),
  },
  // Add more rows as needed
];

function EditToolbar(props: GridToolbarProps) {
  const { setRows, setRowModesModel } = props as { setRows: React.Dispatch<React.SetStateAction<RowData[]>>; setRowModesModel: React.Dispatch<React.SetStateAction<any>> };

  const handleClick = () => {
    const id = getRandomId();
    setRows((oldRows) => [
      ...oldRows,
      { id, customerName: '', orderDate: '', status: '', isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'customerName' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add Order
      </Button>
    </GridToolbarContainer>
  );
}

export default function OrdersGrid() {
  const [rows, setRows] = React.useState<RowData[]>(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params: GridRowParams<RowData>, event: MuiEvent<any>) => {
    // Handle the event directly without relying on `reason`
    console.log('Row edit stopped', params, event);
    // If you need to prevent default behavior
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: string) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: string) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: string) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: string) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow?.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow: RowData) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: any) => {
    setRowModesModel(newRowModesModel);
  };

  const columns: GridColDef<RowData>[] = [
    { field: 'customerName', headerName: 'Customer Name', width: 180, editable: true },
    {
      field: 'orderDate',
      headerName: 'Order Date',
      type: 'date',
      width: 180,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 180,
      editable: true,
      type: 'singleSelect',
      valueOptions: statuses,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: (params: GridRowParams<RowData>) => {
        const id = params.id as string; // Typecast if needed
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key="save"
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: 'primary.main' }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key="cancel"
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key="edit"
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar, // Updated prop name
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel }, // Updated prop name
        }}
      />
    </Box>
  );
}
