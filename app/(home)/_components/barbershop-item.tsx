import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent} from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 pb-0">
                <div className="px-1  w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="opacity-75 flex gap-1 items-center top-3 left-3">
                        <StarIcon size={12}/>
                        <span className="text-xs">5</span>
                    </Badge>
                    </div>
                    
                    <Image alt={barbershop.name} src={barbershop.imageUrl}  style={{objectFit: "cover",}} fill className="rounded-2xl pt-1" />
                </div>
                <div className="px-3 pb-3">
                    <h2 className="font-bolt overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="mt-2 text-sm overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3">Reservar</Button>
                </div>
                
            </CardContent>
        </Card>
    );
}

export default BarbershopItem;