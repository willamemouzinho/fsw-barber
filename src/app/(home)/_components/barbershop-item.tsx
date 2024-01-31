import { Badge } from "@/app/_components/badge";
import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export interface IBarbershopItemProps {
  barbershop: Barbershop;
}

export function BarbershopItem({ barbershop }: IBarbershopItemProps) {
  return (
    <Card className="flex h-72 min-h-44 min-w-44 flex-col justify-between">
      <div className="relative h-40 w-full">
        <div className="absolute left-3 top-3 z-10">
          <Badge variant="avaliation">
            <StarIcon size={14} className="text-primary" />
            5,0
          </Badge>
        </div>
        <Image
          alt={barbershop.name}
          src={barbershop.imageUrl}
          fill
          className="rounded-2xl object-cover p-2"
        />
      </div>

      <div className="p-3">
        <CardHeader className="mb-1 overflow-hidden text-ellipsis text-nowrap p-0 font-bold">
          {barbershop.name}
        </CardHeader>
        <CardContent className="text-third mb-3 overflow-hidden text-ellipsis text-nowrap p-0 text-xs">
          {barbershop.address}
        </CardContent>
        <CardFooter className="p-0">
          <Button variant="secondary" className="w-full">
            Reservar
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
