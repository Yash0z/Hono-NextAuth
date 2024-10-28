import { AuthConfig } from "@hono/auth-js";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";

export function getAuthConfig(): AuthConfig {
	return {
		secret: process.env.AUTH_SECRET!,
		providers: [
			GitHub({
				clientId: process.env.GITHUB_ID!,
				clientSecret: process.env.GITHUB_SECRET!,
			}),
			Google({
				clientId: process.env.GOOGLE_ID,
				clientSecret: process.env.GOOGLE_SECRET,
				authorization: {
					params: {
						prompt: "consent",
						access_type: "offline",
						response_type: "code",
					},
				},
			}),
		],
	};
}
