import React from "react";
import "./App.css";
import tableData from "./Mock/Table.json";
import { Table } from "./Component/Tables/Table.component";
function App() {
  return (
    <div className="h-screen bg-red-400">
      <Table
        data={tableData}
        itemsPerPage={4}
        paginated={true}
        head={[
          { show: "Nom", value: "nom", sort: true },
          { show: "Prénom", value: "prenom", sort: true },
          { show: "Age", value: "age", sort: true },
          { show: "Actif", value: "actif", sort: false },
        ]}
      />
    </div>
  );
}

export default App;
