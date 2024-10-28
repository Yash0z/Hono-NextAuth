import type { Session } from "@auth/core/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { signOut } from "@hono/auth-js/react";

export default function SessionData({ session }: { session: Session | null }) {
	if (session?.user) {
		return (
			<div className='w-full space-y-6 overflow-auto'>
				<h2 className='text-3xl font-bold'>Current Session Data</h2>
				<p>
					Only some fields in the user object is passed to the page to
					avoid exposing sensitive information.
				</p>

				<pre className='text-sm  font-Euclid  p-10 w-full bg-gray-300 rounded-sm '>
					<code>
						<span className='text-secondary '>"Avatar":</span>
						<Avatar className='w-[120px] h-[120px] mt-5'>
							{session?.user?.image && (
								<AvatarImage
									src={session.user.image}
									alt={session.user.name ?? ""}
								/>
							)}
							<AvatarFallback>
								{session?.user?.name
									?.split(" ")
									.map((word) => word[0])
									.join("")
									.slice(0, 3)
									.toUpperCase()}
							</AvatarFallback>
						</Avatar>
					</code>
				</pre>

				<pre className='text-sm  font-Euclid  p-10 w-full bg-gray-300 rounded-sm  '>
					<code>{JSON.stringify(session, null, 2)}</code>
				</pre>

				<Button
					size='lg'
					className='bg-accent1 text-primary hover:bg-orange-300'
					onClick={() => signOut()}
				>
					Sign Out
				</Button>
			</div>
		);
	}

	return (
		<h1>
			No session data, please <em>Sign In</em> first.
		</h1>
	);
}
