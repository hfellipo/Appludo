"use client";

import { Button } from "@/app/_components/ui/button";
import { input } from "@/app/_components/ui/Input";
import { SearchrIcon } from "lucide-react";

const Search =() {
    return(
        <div className="flex items-center gap-2">
        <Input placeholder="Busque por uma Barbearia..."/>
        <Button variant="default" size="icon"/>
            <Searchicon size={18}>

        </Button>

        </div>
    );
}

export default Search;