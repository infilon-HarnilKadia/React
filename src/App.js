import './App.css';
import { useCallback, useState } from "react"
import './asset/style.css';
import "flowbite/dist/flowbite.css";
import SideTop from "./Component/SideTop";
import SidebarFooter from "./Component/SidebarFooter";
import logo1 from "./asset/logo.png"
import Sidebar from './Component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Leaves from './Component/Leaves';
import DateExp from './helper/DateHelper';
import Holiday from './Component/Holiday';
import Login from './Component/Login';


function App() {
  const [side, setSide] = useState(false)
  const [right, setRight] = useState(false)
  const handleSide = () => {
    setSide(!side)
  }
  const handleRight = useCallback(() => {
    setRight(!right)
  }, [right])
  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen bg-white-100">
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-full relative overflow-y-auto overflow-x-hidden bg-grid">
                  <div className="p-4 cc">
                    <Login />
                  </div>
                </div>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <div
                    className={`overflow-hidden flex flex-col ${side ? 'w-0 transition-all duration-300 ease-out' : 'w-96 transition-all duration-300 ease-in sm:w-30'} shadow-lg bg-white-800`}
                  >
                    <div className="flex items-center justify-center h-16 bg-white-900">
                      <img src={logo1} width={300} height={300} className="p-10 mt-2"></img>
                    </div>
                    <Sidebar />
                    <div
                      className={`bg-green flex flex-col space-y-5 shadow-3xl p-6 transition-all ease-in-out delay-400 duration-500 ${!right ? 'side-ani opacity-0' : 'side-ani1 h-4xl'
                        }`}
                    >
                      <SideTop />
                    </div>
                    <div
                      className={`sidebar-footer cursor-pointer overflow-hidden ${!right ? "shadow-3xl" : ""} relative bottom-0 flex ${side ? 'hidden' : 'block'}`}
                      onClick={handleRight}
                    >
                      <SidebarFooter handleRight={right} />
                    </div>
                  </div>
                  <div className="w-full relative overflow-y-auto overflow-x-hidden bg-grid">
                    <div className="flex items-center h-16 bg-grid fixed w-full z-100">
                      <img src={logo1} className={`px-7 imf duration-400 ${!side ? 'hidden' : 'block'}`}></img>
                      <div className="flex items-center px-2">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-700" onClick={handleSide}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-4 cc">
                      <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/leaves" element={<Leaves />} />
                        <Route path="/holiday" element={<Holiday />} />
                      </Routes>
                    </div>
                    <footer className="grid grid-cols-1 px-8 py-9">
                      <div>
                        <small>{DateExp()}</small><br />
                        <small className=''>&#169; {DateExp(1)} EMS Infilon. All rights reserved</small>
                      </div>
                    </footer>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      );
    </>
  );
}

export default App;
