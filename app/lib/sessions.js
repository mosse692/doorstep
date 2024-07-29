import 'server-only'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = new TextEncoder().encode(
  "A29u2I8glBCKTcqoFSoxE08nSKs4/sUnV+VqcftVjaU="
);

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, secretKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log(error,"Failed to verify session");
  }
}

export async function createSession(userId) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function updateSession() {
  const session = cookies().get("session").value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  cookies().delete("session");
}

export async function verifySession() {
  const cookie = cookies().get(cookie.name)?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/");
  }

  return { userId: session.userId };
}
