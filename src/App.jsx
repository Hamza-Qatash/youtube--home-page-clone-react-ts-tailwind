import { Header, Main, Sidebar } from "./containers";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <div className="flex flex-col max-h-screen">
        <Header />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto gap-5 px-2 pt-1">
          <Sidebar />
          <Main />
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
