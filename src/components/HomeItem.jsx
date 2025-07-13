import Card from "./Card";
import { Link } from "react-router-dom";

function HomeItem() {
  return (
    <div className="flex bg-card-background gap-24 mt-56 ml-auto mr-auto">
      <Card>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">
            Ordens de Serviço
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Crie, visualize e gerencie todas as ordens de serviço.
          </p>
        </div>
        <div className=" mt-auto pt-4 ">
          <Link
            className="w-full rounded-md bg-primary py-2 px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            to="/Dashboard/Orders"
          >
            Gerenciar Ordens
          </Link>
        </div>
      </Card>
      <Card>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">
            Rastreie seu pedido
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Acompanhe o status do seus pedidos e peça suporte caso necessário.
          </p>
        </div>
        <div className="mt-auto pt-4">
          <Link className="w-full rounded-md bg-primary py-2 px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Acompanhar pedidos
          </Link>
        </div>
      </Card>
      <Card>
        <div>
          <h3 className="text-xl font-bold text-card-foreground">
            Painel de cotações
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Simule o preço de um protudo com base nas suas preferências.
          </p>
        </div>
        <div className="mt-auto pt-4">
          <Link className="w-full rounded-md bg-primary py-2 px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Painel de cotações
          </Link>
        </div>
      </Card>
    </div>
  );
}
export default HomeItem;
