import React from "react";
import CustomBootstrapTable from "../../../components/CustomBootstrapTable/CustomBootstrapTable";

const columns = [
  { field: "nombre", title: "Nombre", sortable: true },
  { field: "centro_costo", title: "Centro de costo", sortable: true },
  { field: "puesto", title: "Puesto", sortable: true },
  {
    field: "empresa.codigo",
    title: "Código",
    sortable: true,
    align: "center",
  },
  {
    field: "empresa.nombre",
    title: "Empresa",
    sortable: true,
    align: "center",
  },
  {
    field: "empresa.pais",
    title: "País",
    sortable: true,
    align: "center",
  },
  {
    field: "fecha_ingreso",
    title: "fecha de ingreso",
    sortable: true,
    align: "center",
  },
];

const EmployeeList = ({ employees, isLoading }) => {
  return (
    <CustomBootstrapTable
      columns={columns}
      data={employees}
      loadingMessage="Consultando empleados..."
      isLoading={isLoading}
    />
  );
};

export default EmployeeList;
