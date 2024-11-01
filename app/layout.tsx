import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loader from "./loading";
import { TanstackProvider } from "@/components/TanstackProvider";

// LOCAL FONTS
import localFont from "next/font/local";
const ClashGrotesk = localFont({
	src: "../public/fonts/ClashGrotesk-Regular.woff2",
	variable: "--font-ClashGrotesk",
	weight: "100 900",
});
const EuclidRegular = localFont({
	src: "../public/fonts/EuclidRegular.woff2",
	variable: "--font-EuclidRegular",
	weight: "100 900",
});
const Satoshi_B = localFont({
	src: "../public/fonts/Satoshi-Black.woff2",
	variable: "--font-Satoshi_B",
	weight: "100 900",
});

//////////////////////////

export const metadata: Metadata = {
	title: "Auth",
	description: "Auth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${ClashGrotesk.variable} ${EuclidRegular.variable} ${Satoshi_B.variable} antialiased `}
			>
				<div className=' bg-primary relative  text-xl text-text h-screen w-full overflow-y-hidden font-ClashGrotex'>
					<TanstackProvider>
						<Suspense fallback={<Loader />}> {children}</Suspense>
					</TanstackProvider>
				</div>
			</body>
		</html>
	);
}
