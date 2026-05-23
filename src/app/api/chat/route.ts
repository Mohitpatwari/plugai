import connectDb from "@/src/lib/db";
import Settings from "@/src/model/settings.model";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, ownerId } = await req.json();

    if (!message || !ownerId) {
      return NextResponse.json(
        { message: "message and ownerId is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { message: "Gemini API key missing" },
        { status: 500 }
      );
    }

    await connectDb();

    const setting = await Settings.findOne({ ownerId });

    if (!setting) {
      return NextResponse.json(
        { message: "Chatbot is not configured yet." },
        { status: 400 }
      );
    }

    const knowledge = `
Business Name: ${setting.businessName || "Not provided"}
Support Email: ${setting.supportEmail || "Not provided"}
Knowledge: ${setting.knowledge || "Not provided"}
`;

    const prompt = `
You are a professional AI customer support assistant.

Use ONLY the information below.

If answer is unavailable, reply:
"Please contact support."

Business Information:
${knowledge}

Customer Question:
${message}

Answer:
`;

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const res = await model.generateContent(prompt);

    const response=NextResponse.json(res.response.text());
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;

  } catch (e) {
    const response= NextResponse.json(
      { message: `Chat Error: ${e}` },
      { status: 500 }
    )
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
}

export const OPTIONS=async ()=>{
    return NextResponse.json(null, {
        status:201,
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
        }
    })
}