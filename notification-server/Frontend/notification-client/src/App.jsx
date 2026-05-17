
import Dashboard from "../src/components/Dashboard";
import Actions from "../src/components/Actions";
import { useSocket } from "./socket/useSocket";
function App() {
  useSocket(); // 🔥 activate socket

  return (
    <div>
    <Dashboard />
    <Actions />
    </div>
  );
}

export default App;