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
        options={{
          NumberItemsOptions: { permitChange: true, options: [4, 8, 12] },
        }}
        className={{
          th: {
            hover: "hover:bg-gray-300 cursor-pointer",
            standard:
              "px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200",
          },
          td: "px-5 py-5 border-b border-gray-200 bg-white text-sm",
          tr: "test",
          pageSelect: {
            button:
              "px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-r hover:bg-gray-300",
            input:
              "w-6 mx-4 border-b border-gray-900 border-dashed text-center",
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
