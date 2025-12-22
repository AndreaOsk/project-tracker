import ProjectList from "./components/ProjectList";

function App() {
  const projects = [
    { id: 1, name: "Water Main Upgrade – Zone A", status: "Live" },
    { id: 2, name: "Pumping Station Renewal", status: "Planned" },
    { id: 3, name: "Reservoir Maintenance", status: "Complete" }
  ];

  return (
    <div>
      <h1>Project Tracker</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
