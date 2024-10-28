"use client";
import { Button } from "@/components/ui/button";
import { Github, ThumbsUp } from "lucide-react";
import { authConfigManager, useOauthPopupLogin } from "@hono/auth-js/react";
import { useEffect } from "react";
export default function Providers() {
	const { popUpSignin: githubPopUp, status: githubStatus } =
		useOauthPopupLogin("github", {
			callbackUrl: "/auth/success",
		});
	const { popUpSignin: googlePopUp, status: googleStatus } =
		useOauthPopupLogin("google", {
			callbackUrl: "/auth/success",
		});

	// refetch credentials
	useEffect(() => {
		if (githubStatus === "success" || googleStatus === "success") {
			authConfigManager.getConfig().fetchSession({ event: "refetch" });
		}
	}, [githubStatus, googleStatus]);

	return (
		<div className=' flex flex-col p-10  gap-10  font-Euclid '>
			{/* Google */}
			<div className='flex flex-col gap-4'>
				<Button
					onClick={googlePopUp}
					className=' bg-accent2  rounded-sm text-primary  hover:bg-gray-300'
				>
					<ThumbsUp />
					Continue with Google
				</Button>
				{/* Github */}
				<Button
					onClick={githubPopUp}
					className=' bg-accent2  rounded-sm text-primary  hover:bg-gray-300'
				>
					<Github />
					Continue with Github
				</Button>
			</div>
		</div>
	);
}
