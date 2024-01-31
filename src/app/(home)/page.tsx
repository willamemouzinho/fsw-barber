import { format } from "date-fns";
import { Header } from "../_components/header";
import { ptBR } from "date-fns/locale";
import { Search } from "./_components/search";
import { BarbershopItem } from "./_components/barbershop-item";
import { SectionTitle } from "../_components/section-title";
import { BookingItem } from "../_components/booking-item";
import prisma from "../_lib/prisma";
import { Barbershop } from "@prisma/client";

export default async function Home() {
  const date = format(new Date(), "EEEE',' dd 'de' MMMM", {
    locale: ptBR,
  });
  const dateFormated = date.replace("-feira", "");

  const barbershops: Barbershop[] = await prisma.barbershop.findMany();

  return (
    <div className="h-scree">
      <Header />

      <div className="mt-5 px-6">
        <h2 className="mb-1 mt-5 text-xl">
          Olá, <span className="font-bold">Willame!</span>
        </h2>
        <p className="mb-6 text-sm capitalize">{dateFormated}</p>
      </div>

      <div className="mt-5 px-6">
        <Search />
      </div>

      <div className="mt-9 px-6">
        <div className="mb-3">
          <SectionTitle>Agendamentos</SectionTitle>
        </div>
        <BookingItem />
      </div>

      <div className="mt-6">
        <div className="mb-3 px-6">
          <SectionTitle>Recomendados</SectionTitle>
        </div>
        <div className="flex gap-x-4 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mb-12 mt-6">
        <div className="mb-3 px-6">
          <SectionTitle>Populares</SectionTitle>
        </div>
        <div className="flex gap-x-4 overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
