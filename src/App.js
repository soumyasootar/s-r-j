
import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from "./Router/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Box>
    <Navbar />
    <AllRoutes />
    <Footer/>
  </Box>
  );
}

export default App;
