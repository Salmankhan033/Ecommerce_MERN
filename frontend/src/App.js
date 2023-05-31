import logo from './logo.svg';
import './App.css';
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-[calc(100vh)] bg-slate-100">
      <Headers />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
