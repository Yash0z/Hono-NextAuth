"use client";
import { useSession } from "@hono/auth-js/react";
import SessionData from "./sessionData";
import { Skeleton } from "../ui/skeleton";

export default function User() {
	const { data: session, status } = useSession();
	return (
		<div className='space-y-2 text-primary '>
			<h1 className='text-4xl font-Satoshi_B text-secondary mb-10'>
				Client Side Rendering Usage
			</h1>

			{status === "loading" ? (
				<div className='flex items-center space-x-3 '>
					<Skeleton className='h-12 w-12 rounded-full bg-skeleton' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px] bg-skeleton' />
						<Skeleton className='h-4 w-[200px] bg-skeleton' />
					</div>
				</div>
			) : (
				<SessionData session={session} />
			)}
		</div>
	);
}
