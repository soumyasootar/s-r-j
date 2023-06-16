import { Box } from "@chakra-ui/react";
import "./App.css";
import AllRoutes from "./Router/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import deskimage from "./Images/FrontDesk.jpg";

function App() {
  return (
    <Box
      bgImage={deskimage}
      bgSize={{ base: "cover", md: "cover" }}
      bgRepeat={"no-repeat"}
      bgAttachment={"fixed"}
      bgPosition={"center"}
      w={"fit-content"}
    >
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
