import { Hono } from "hono";
import { authHandler, initAuthConfig, verifyAuth } from "@hono/auth-js";
import { handle } from "hono/vercel";
import { getAuthConfig } from "@/lib/authConfig";

export const runtime = "edge";
const app = new Hono();

app.use("*", initAuthConfig(getAuthConfig));

app.use("/api/auth/*", authHandler());

app.use("/api/*", verifyAuth());

app.get("/api/protected", (c) => {
	const auth = c.get("authUser");
	return c.json(auth);
});

export const GET = handle(app);
export const POST = handle(app);
