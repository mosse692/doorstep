import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import { setCookie } from "nookies";

export async function POST(req, res) {
  const { name, password } = req.body;
  try {
    // Replace this with actual user authentication
    if (name === "mosse692@gmail.com" && password === "12345678A@") {
      const token = sign({ name }, "Afonso11", { expiresIn: "1h" });

      setCookie({ res }, "token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 3600,
        path: "/",
      });

      res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`);
      return NextResponse.json({ name }, { status: 200 });
    }
    return NextResponse.json({ answer: "not working" }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 401 });
  }
}
