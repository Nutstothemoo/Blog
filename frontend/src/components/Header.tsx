import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
	return (
		<header className='bg-blue-500 py-4'>
			<div className='container mx-auto flex items-center justify-between'>
				<div>LOGO</div>
				<nav>
					<ul className='flex space-x-4'>
						<li>
							<Link href='/'>Blog</Link>
						</li>
						<li>
							<Link href='/about' className='text-white hover:text-gray-300'>
								À propos
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
