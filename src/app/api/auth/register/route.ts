import { NextRequest, NextResponse } from "next/server";
import { RegisterSchema } from "@/schemas";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        const validatedFields = RegisterSchema.safeParse(body);
        console.log(validatedFields);

        if (!validatedFields.success) {
            return NextResponse.json({
                error: "Invalid fields.",
                // errors: validatedFields.error.errors,
            }, { status: 200 });
        }

        return NextResponse.json({
            success: "Email sent!",
        });

    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({
            message: "Internal Server Error",
        }, { status: 500 });
    }
}