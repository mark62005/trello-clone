import { cn } from "@/lib/utils";
import Navbar from "@/components/landing/Navbar";

export default function LandingPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={cn("relative h-full font-sans antialiased bg-slate-100")}>
			<Navbar />
			<main className="relative flex flex-col min-h-screen">{children}</main>
		</div>
	);
}
