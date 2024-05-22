import { format } from "date-fns";
import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_componets/Search";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Seja bem vindo!.</h2>
      <p className="capitalize text-sm">{format(new Date(), "EEEE', ' dd 'de' MMMM", {
        locale: ptBR,
      })}</p>
      </div>

      <div className="px-5 mt-5">
        <Search/>
    </div>
  );
}
