import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CalendarDays, HomeIcon, LogOut, MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-5">
      <Link href="/">
        <Image alt="FSW logo" src="/logo.png" width={130} height={22} />
      </Link>

      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="h-10 w-10 p-2">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[90vw] px-0 sm:w-[500px]">
          <SheetHeader>
            <SheetTitle className="mb-6 px-6 text-left">Menu</SheetTitle>

            <Separator className="w-full" />
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-y-6 px-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-10 w-10 rounded-full bg-slate-700" />
                <span>Willame Mouzinho</span>
              </div>

              <SheetClose asChild>
                <Link href="/">
                  <Button className="h-10 w-10 p-2" variant="secondary">
                    <LogOut size={20} />
                  </Button>
                </Link>
              </SheetClose>
            </div>

            <div className="flex flex-col gap-y-3">
              <SheetClose asChild>
                <Button
                  className="flex justify-start gap-x-2 px-4 py-2 text-sm"
                  variant="outline"
                >
                  <HomeIcon size={20} />
                  Início
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Button
                  className="flex justify-start gap-x-2 px-4 py-2 text-sm"
                  variant="outline"
                >
                  <CalendarDays size={20} />
                  Agendamentos
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
