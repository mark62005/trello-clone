import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Button, buttonVariants } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
	return (
		<MaxWidthContainer>
			<div className="mt-20 flex flex-col items-center justify-center gap-y-6">
				<div className="flex items-center mb-4 p-4 border shadow-sm bg-amber-100 text-amber-700">
					<Medal className="h-6 w-6 mr-2" />
					No.1 Task Management
				</div>
				<h1 className="text-3xl md:text-6xl text-center text-slate-800">
					Trello Clone helps team move
					<span className="block w-fit my-2 mx-auto px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white">
						work forward.
					</span>
				</h1>

				<div className="mx-auto max-w-xs text-center text-sm text-slate-400 md:max-w-2xl md:text-xl">
					Collaborate, manage projects, and reach new productivity peaks. From
					high rises to the home office, the way your team works is unique -
					accomplish it all with Trello Clone.
				</div>

				<Link
					href="/sign-up"
					className={buttonVariants({})}
				>
					Get Trello Clone for free
				</Link>
			</div>
		</MaxWidthContainer>
	);
};
export default LandingPage;
