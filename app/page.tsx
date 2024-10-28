"use client";
import Providers from "@/components/auth/providers";
import User from "@/components/auth/User";
import { SessionProvider } from "@hono/auth-js/react";

export default function Home() {
	return (
		<>
			<SessionProvider>
				<div className='grid grid-cols-[1.2fr_2fr] font-ClashGrotex bg-primary w-full h-full '>
					<div className='p-10 m-16 space-y-10 '>
						<h1 className='font-Satoshi_B text-4xl text-accent4'>
							Providers
						</h1>
						<Providers />
					</div>

					<div className='bg-accent2 p-10'>
						<User />
					</div>
				</div>
			</SessionProvider>
		</>
	);
}
