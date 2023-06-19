import { MantineProvider } from "@mantine/core";
import { Home } from "./pages/Home/Home";
import { DataProvider } from "./data";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <>
      <DataProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ globalStyles: () => ({ body: { backgroundColor: "#0d253f" } }) }}>
          <Router>
            <AppRouter />
          </Router>
          {/* <Home /> */}
        </MantineProvider>
      </DataProvider>
    </>
  );
}

export default App;
