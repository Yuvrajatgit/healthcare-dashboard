import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container flex">
      <div className="app-layout">
        <div className="header-grid">
          <Header />
        </div>

        <div className="body-grid max-h-w">
          <Sidebar />
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
