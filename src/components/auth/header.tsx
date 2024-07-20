import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center">
      <h1 className={cn(
        "text-3xl font-semibold",
      )}>
        DeveloPop
      </h1>
      <p>
        {label}
      </p>
    </div>
  );
};
