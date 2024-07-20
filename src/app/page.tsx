import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-slate-100 to-black">
      <h1 className="text-2xl font-semibold">Home</h1>
      <LoginButton>
        <Button size="xl">
          Login
        </Button>
      </LoginButton>
    </main>
  );
}
