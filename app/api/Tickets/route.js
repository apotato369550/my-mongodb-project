import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";
// 1:31:57
export async function POST(req) {
    console.log("POST RAN");
    try {
        console.log("try RAN");
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Error", error}, { status: 500});
    }
}