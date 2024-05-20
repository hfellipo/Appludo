import { format } from "date-fns";
import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma"
import BarbershopItem from "./_components/barbershop-item";
import Footer from "../_components/footer";




export default async function Home() {
//conexao com o banco
const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá Fellipo.</h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE', ' dd 'de' MMMM", {
        locale: ptBR,
        })}</p>
      </div>
      <div className="px-5 mt-6">
        <Search/>
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase font-bold mb-3">Agendamentos</h2>
        <BookingItem/>
      </div>
      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase font-bold mb-3">Recomendados</h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&..-webkt-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase font-bold mb-3">Populares</h2>
        <div className="px-5 flex gap-4 overflow-x-auto [&..-webkt-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
