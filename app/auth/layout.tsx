import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Auth",
};

export default async function Authlayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className='relative flex h-screen w-full '>{children}</div>;
}
