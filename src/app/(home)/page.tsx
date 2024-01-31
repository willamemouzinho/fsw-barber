import { format } from "date-fns";
import { Header } from "../_components/header";
import { ptBR } from "date-fns/locale";
import { InputSeach } from "./_components/search";

export default function Home() {
  const date = format(new Date(), "EEEE',' dd 'de' MMMM", {
    locale: ptBR,
  });

  const dateFormated = date.replace("-feira", "");

  return (
    <div className="h-scree">
      <Header />

      <div className="mt-5 px-6">
        <h2 className="mb-1 mt-5 text-xl">
          Olá, <span className="font-bold">Willame!</span>
        </h2>
        <p className="mb-6 text-sm capitalize">{dateFormated}</p>

        <InputSeach />
      </div>
    </div>
  );
}
