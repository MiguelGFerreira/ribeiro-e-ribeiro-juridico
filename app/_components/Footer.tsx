import React from 'react'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'

const Footer = () => {
	return (
		<footer className='grid p-4'>
			<div className='flex justify-evenly'>
				<div className='flex items-center'>
					Escritório
				</div>
				<div className='flex items-center'>
					Contato
				</div>
				<div className='flex flex-col items-center'>
					Redes Sociais
					<div className='grid grid-cols-2 gap-4 p-4'>
						<FacebookIcon />
						<InstagramIcon />
					</div>
				</div>
			</div>
			<div className='flex mt-4 justify-center'>
				<h4>&copy; Ribeiro Jurídico — Todos os direitos reservados</h4>
			</div>
		</footer>
	)
}

export default Footer