import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className='main-container'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
