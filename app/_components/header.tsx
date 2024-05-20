import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row">
                <Image src="/logo.png" alt="Appludo Barbearia" width={90} height={720}/>
                <Button variant="outline" size="icon" className="p-2">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
    );
}

export default Header;