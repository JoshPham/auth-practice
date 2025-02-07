"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild = false,
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
    };

    if (mode === "modal") {
        return (
            <div className="cursor-pointer" onClick={onClick}>
                TODO: Implement modal
            </div>
        )
    }

    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )
}
