import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "@pages/Home/Home";
import VLibras from "@djpfs/react-vlibras";
function App() {
  return (
    <>
      <VLibras />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Home />
    </>
  );
}

export default App;
