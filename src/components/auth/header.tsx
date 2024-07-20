import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/images/DeveloPopLogo.png";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
      <h1 className={cn(
        "text-3xl font-semibold flex gap-3",
      )}>
        <Image 
          src={Logo}
          alt="DeveloPop"
          width={48}
          height={48}
        />
        DeveloPop
      </h1>
      <p>
        {label}
      </p>
    </div>
  );
};
