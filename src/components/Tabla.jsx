import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'titulo', label: 'Titulo', minWidth: 50 },
  { id: 'descripcion', label: 'Descripcion', minWidth: 50 },
  { id: 'fechaCreacion', label: 'Fecha de creacion', minWidth: 50 },
  { id: 'feachaLimite', label: 'Fecha limite', minWidth: 50 },
  { id: 'estado', label: 'Estado', minWidth: 50 },
  { id: 'prioridad', label: 'Prioridad', minWidth: 50 },
  
];

function createData(titulo, descripcion, fechaCreacion, feachaLimite,estado,prioridad) {
  return { titulo, descripcion, fechaCreacion, feachaLimite, estado, prioridad };
}

const rows = [
  createData('Implementar login', 'Agregar funcionalidad de autenticación de usuarios', '2025-06-01', '2025-06-10', 'En progreso', 'Alta'),
  createData('Diseño de dashboard', 'Crear el diseño inicial del dashboard para administradores', '2025-05-28', '2025-06-15', 'Pendiente', 'Media'),
  createData('Integrar API de pagos', 'Conectar con la API de Stripe para procesar pagos', '2025-05-30', '2025-06-20', 'Pendiente', 'Alta'),
  createData('Corrección de errores', 'Revisar y corregir los bugs reportados en la última versión', '2025-06-05', '2025-06-12', 'En progreso', 'Media'),
  createData('Optimización de base de datos', 'Mejorar consultas y rendimiento en base de datos', '2025-06-03', '2025-06-18', 'Pendiente', 'Baja'),
  createData('Documentación del proyecto', 'Completar la documentación técnica del sistema', '2025-05-25', '2025-06-14', 'En revisión', 'Media'),
  createData('Test de usabilidad', 'Realizar pruebas con usuarios finales', '2025-06-02', '2025-06-11', 'Programado', 'Alta'),
  createData('Soporte multiidioma', 'Implementar soporte para varios idiomas', '2025-05-20', '2025-06-25', 'Pendiente', 'Media'),
  createData('Configuración CI/CD', 'Automatizar el proceso de integración y despliegue continuo', '2025-06-01', '2025-06-13', 'En progreso', 'Alta'),
  createData('Revisión de código', 'Auditoría de seguridad y estilo en el código', '2025-06-04', '2025-06-09', 'En revisión', 'Alta'),
];


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '95%', margin: "auto", overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: column.minWidth,
                    backgroundColor: "#1565c0",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.titulo}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}