import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Intro } from "./components/Intro";
import { Role } from "./components/Role";

function App() {
  return (
    <>
      <div className="bg-primary">
        <Nav />
        <Home />
        <Intro />
        <Role />
      </div>
    </>
  );
}

export default App;
