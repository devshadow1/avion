import React from 'react'

import ButtonLink from '../button/link'
import background from '../../assets/background.jpeg'

const Hero: React.FC = () => {
	return (
		<section className='c-hero'>
			<div className='c-hero__content'>
				<section>
					<h1 className='c-hero__title'>İlham Veren Fikirler, Sonsuz Possibilities.</h1>
					<div className='c-hero__button'>
						<ButtonLink href='/products' title='Bilgileri Yakalayın!' isLoading={false} />
					</div>
				</section>
				<p className='c-hero__description'>
				Her bir projede, benzersiz fikirlerimi ve yeteneklerimi kullanarak sınırları zorluyorum. 
				Grafik tasarımdan web sitesi oluşturmaya, içerik yazmaktan stratejileri geliştirmeye kadar çeşitli alanlarda çalışıyorum.
				</p>
				<div className='c-hero__button--desktop'>
					<ButtonLink href='/' title='View collection' isLoading={false} />
				</div>
			</div>
			<figure className='c-hero__figure'>
				<img src={background} alt='Image hero' loading='lazy' />
			</figure>
		</section>
	)
}

export default Hero
