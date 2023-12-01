import Link from "next/link";
import Logo from "../Logo";
import MaxWidthContainer from "../MaxWidthContainer";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
	return (
		<header className="sticky z-50 top-0 inset-x-0 h-14 bg-white flex items-center">
			<MaxWidthContainer>
				<div className="flex items-center justify-between">
					<Logo />

					{/* TODO: Add mobile navbar */}

					<div className="hidden items-center space-x-4 sm:flex">
						<Link
							href="/sign-in"
							className={buttonVariants({
								variant: "ghost",
							})}
						>
							Sign In
						</Link>
						<Link
							href="/sign-up"
							className={buttonVariants()}
						>
							Get Started for Free
						</Link>
					</div>
				</div>
			</MaxWidthContainer>
		</header>
	);
};
export default Navbar;
