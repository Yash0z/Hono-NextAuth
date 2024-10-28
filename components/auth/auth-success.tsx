"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { useSession } from "@/hooks/use-session";

export function AuthSuccess() {
	const { session, status } = useSession();

	useEffect(() => {
		if (status !== "pending" && window.opener) {
			if (session?.user) {
				window.opener.postMessage(
					{
						status: "success",
					},
					window.location.origin
				);
			} else {
				window.opener.postMessage(
					{
						status: "errored",
						error: "some error",
					},
					window.location.origin
				);
			}
			window.close();
		}
	}, [session?.user, status]);

	return <></>;
}
