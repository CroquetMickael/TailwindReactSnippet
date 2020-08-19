import React from "react";
import "./App.css";
import tableData from "./Mock/Table.json";
import { Table } from "./Component/Tables/Table.component";
import { Button } from "./TestingComponentComposition/Button";
import { InputJumper } from "./TestingComponentComposition/Input/InputJumper";
import { Input } from "./TestingComponentComposition/Input/Input";
import { TopBar } from "./TestingComponentComposition/TopBar";
import { Select } from "./TestingComponentComposition/Select";
import { BottomBar } from "./TestingComponentComposition/BottomBar";
function App() {
  return (
    <div className="h-screen bg-red-400">
      <Table
        data={tableData}
        itemsPerPage={4}
        paginated={true}
        component={{
          top: (
            <TopBar
              searchInput={
                <Input
                  placeHolder="Searching"
                  searchableValue={["nom", "prenom", "actif"]}
                />
              }
              itemsSelect={<Select options={[4, 8, 12]} />}
            />
          ),
          bot: (
            <BottomBar
              jumper={<InputJumper />}
              left={<Button>{"<<"}</Button>}
              right={<Button>{">>"}</Button>}
            />
          ),
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
