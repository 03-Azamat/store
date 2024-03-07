import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Layout } from "./components/layout/Layout";
import "./App.css";

type LayoutChildren = ReactNode | ReactNode[];

function App() {
  return (
    <>
      <Layout<LayoutChildren>>
        <Box minH='90vh'>Hello</Box>
      </Layout>
    </>
  );
}

export default App;
