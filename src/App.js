import { Box } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box
      // bgImage={deskimage}
      bg={"rgb(243,243,243)"}
      bgSize={{ base: "cover", md: "cover" }}
      bgRepeat={"no-repeat"}
      bgAttachment={"fixed"}
      bgPosition={"center"}
     
    >
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
