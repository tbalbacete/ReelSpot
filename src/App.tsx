import { MantineProvider } from "@mantine/core";
import { Home } from "./Pages/Home";
import { DataProvider } from "./data";

function App() {
  return (
    <>
      <DataProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ globalStyles: () => ({ body: { backgroundColor: "#0d253f" } }) }}>
          <Home />
        </MantineProvider>
      </DataProvider>
    </>
  );
}

export default App;
