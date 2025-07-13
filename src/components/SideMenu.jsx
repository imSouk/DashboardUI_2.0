import {
  Settings,
  LogOut,
  LucideHome,
  Package,
  Calculator,
} from "lucide-react";
import MenuItem from "./MenuItem";
import logoAtmosfera from "../assets/Atmosfera II-1.png";

function SideMenu() {
  return (
    <aside className="min-h-screen w-[100px] bg-card p-4 shadow-xl flex flex-col min-w-[200px] max-w-[300px] overflow-y-auto">
      <header className="flex items-center gap-2 border-b pb-4">
        <img src={logoAtmosfera} alt="Logo da Gráfica" className="h-42 w-34" />
      </header>
      <nav className="flex flex-col gap-5 mt-5">
        <MenuItem icon={LucideHome} text={"Home"} to="/Dashboard/Home" />
        <MenuItem icon={Package} text={"OrdemItem"} to={"/Dashboard/Orders"} />
        <MenuItem icon={Calculator} text={"Simulador de Preços"} />
        <MenuItem icon={Settings} text={"Configurações"} to="/configuracoes" />
      </nav>
      <footer className="mt-auto flex flex-col gap-2 border-t pt-4">
        <MenuItem icon={LogOut} text={"Sair"} to={"/"} />
      </footer>
    </aside>
  );
}

export default SideMenu;
