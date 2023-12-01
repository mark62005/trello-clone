import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<Link href="/">
			<div className="hidden transition md:flex md:items-center md:gap-x-2 hover:opacity-75 ">
				<Image
					src="/logo.svg"
					alt="Logo of Trello Clone"
					height={30}
					width={30}
				/>
				<h2 className="text-lg text-slate-700">Trello Clone</h2>
			</div>
		</Link>
	);
};
export default Logo;
