import { Home } from "./Pages/Home";
import { DataProvider } from "./data";

function App() {
  return (
    <>
      <DataProvider>
        <Home />
      </DataProvider>
    </>
  );
}

export default App;
