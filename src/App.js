import React from 'react';
import './App.css';
import { PaginatedTable } from './Component/Tables/PaginatedTable/PaginatedTable.component';
import tableData from "./Mock/Table.json"
function App() {
  return (
    <div className="h-screen bg-red-400">
      <PaginatedTable data={tableData} itemsPerPage={4} head={["Nom", "Prénom", "Age", "Actif"]} />
    </div>
  );
}

export default App;
