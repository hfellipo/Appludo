import { Card, CardContent } from "./card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const BookingItem = () {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                  <Badge className="bg-[#221C3D] text primary hover:bg-[#221C3D] w-fit">Confirmando</Badge>
                  <h2 className= "font bold">Corte de Cabelo</h2>

                  <div className= "flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                        <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"/>

                        <Avatarfallback>A</Avatarfallback>
                        </Avatar>
                        <h3> className="text-sm text-sm" Salâo Central </h3>
                  </div>

                  <div className="flex flex-col items-center justify-center border-l border-solid border-secundary">
                    <p className="text-sm">Fevereiro</p>
                    <p>className="test-2xl">6</p>
                    <p className="text-sm">9:45</p>
                  
                  </div>
                </div>
            <CardContent>
        <Card/>
    )
 
}
export default BookingItem;