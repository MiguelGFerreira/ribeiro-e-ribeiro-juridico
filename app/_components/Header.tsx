import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const headerLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Quem somos', href: '/about' },
	{ name: 'Atuação', href: '/atuation' },
	{ name: 'Publicações', href: '/publications' },
	{ name: 'Contato', href: '/contact' }
];

const Header = () => {
	return (
		<header className='p-4'>
			<div className="container mx-auto flex items-center justify-between">
				<Image
					src="/Marca-d_agua.png"
					alt="Marca d'água"
					width={40}
					height={40}
				/>
				<nav className='flex gap-4'>
					{headerLinks.map((link) => {
						return (
							<Link
								key={link.name}
								href={link.href}
							>
								{link.name}
							</Link>
						)
					})}
				</nav>
			</div>
		</header>
	)
}

export default Header