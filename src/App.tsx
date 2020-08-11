import React from "react";
import "./App.css";
import tableData from "./Mock/Table.json";
import { Table } from "./Component/Tables/Table.component";
import { PageButton } from "./TestingComponentComposition/Button";
import { InputJumper } from "./TestingComponentComposition/Input/InputJumper";
import { Input } from "./TestingComponentComposition/Input/Input";
function App() {
  return (
    <div className="h-screen bg-red-400">
      <Table
        data={tableData}
        itemsPerPage={4}
        paginated={true}
        options={{
          searchableValue: ["nom", "prenom", "actif"],
          numberItemsOptions: [4, 8, 12],
        }}
        component={{
          top: {
            searchInput: <Input />,
          },
          pageSelector: {
            left: <PageButton />,
            jumper: <InputJumper />,
            right: <PageButton />,
          },
        }}
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
