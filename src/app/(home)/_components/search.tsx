"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <div className="flex items-center gap-x-2">
      <Input type="text" placeholder="Buscar" className="bg-card" />
      <Button className="">
        <SearchIcon size={16} />
      </Button>
    </div>
  );
}
