import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-6 py-5">
      <Link href="/">
        <Image alt="FSW logo" src="/logo.png" width={130} height={22} />
      </Link>
      <Image
        alt="FSW logo"
        src="/logo.svg"
        width={130}
        height={22}
        unoptimized
      />

      <Button
        variant={"secondary"}
        className="flex items-center gap-x-1 font-semibold"
      >
        <GitHubLogoIcon className="h-4 w-4" />
        Github
      </Button>
    </header>
  );
}
