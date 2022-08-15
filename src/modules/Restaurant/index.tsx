import React, {useEffect} from 'react';
import {Restaurant as RestaurantType} from '../../types/restaurant';
import {navigate} from '../../utils/navigate';
import ArrowIcon from '../../assets/arrow-icon.svg';
import './styles.css';
import {useMediaQuery} from '../../hooks';

export const Restaurant = () => {
	const matches = useMediaQuery('(max-width: 767px)');
	const restaurantExists = sessionStorage.getItem('restaurant');

	useEffect(() => {
		if (!restaurantExists) {
			navigate('/home');
		}
	}, []);

	const restaurant = restaurantExists
		? (JSON.parse(restaurantExists) as RestaurantType)
		: null;

	return (
		<main className='restaurant'>
			<header
				className={`restaurant-header ${matches ? 'header-mobile' : ''}`}
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant?.image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div
					className={`header-content ${matches ? 'header-content-mobile' : ''}`}
				>
					<a href='/home'>
						<ArrowIcon />
						Voltar
					</a>

					<div className='header-content-right'>
						<div
							style={{
								display: 'grid',
								placeItems: 'center',
								height: 150,
								width: 150,
								borderRadius: '50%',
								backgroundColor: 'white',
							}}
						>
							<img
								src={restaurant?.logo}
								alt={restaurant?.name}
								width={140}
								height={140}
								style={{borderRadius: '50%'}}
								loading={'lazy'}
							/>
						</div>
						<div
							style={{
								display: matches ? 'flex' : 'block',
								flexDirection: matches ? 'column' : 'unset',
								marginLeft: matches ? 0 : '20px',
								alignItems: 'center',
								color: 'white',
							}}
						>
							<h1 style={{margin: 0, marginBottom: 20, color: 'white'}}>
								{restaurant?.name}
							</h1>
							<h3
								style={{
									margin: 0,
									marginBottom: 20,
									color: 'white',
									fontWeight: 'normal',
								}}
							>
								{restaurant?.telephone}
							</h3>
							<h3
								style={{
									margin: 0,
									marginBottom: 20,
									color: 'white',
									fontWeight: 'normal',
								}}
							>
								{restaurant?.website}
							</h3>
						</div>
					</div>
				</div>
			</header>
			<section
				className='restaurant-info'
				style={{
					marginTop: 30,
					display: 'grid',
					placeItems: 'center',
					padding: matches ? '10px' : 0,
				}}
			>
				<div>
					<p style={{fontSize: '0.875rem', fontWeight: 'bold'}}>Descrição</p>
					<p
						style={{fontSize: '1.375rem', maxWidth: '600px', color: '#676666'}}
					>
						{restaurant?.description}
					</p>

					<p style={{fontSize: '0.875rem', fontWeight: 'bold'}}>
						Faixa de Preço
					</p>
					<p
						style={{
							fontSize: '1rem',
							maxWidth: '600px',
							color: '#676666',
							fontWeight: 400,
						}}
					>
						{restaurant?.price_range}
					</p>

					<div style={{margin: '40px 0', border: '1px solid #CCCCCC'}} />

					<p style={{fontSize: '0.875rem', fontWeight: 'bold'}}>
						Horários de Funcionamento
					</p>
					<p
						style={{
							fontSize: '1rem',
							maxWidth: '600px',
							color: '#676666',
							fontWeight: 400,
						}}
					>
						{restaurant?.opening_hours}
					</p>

					<p style={{fontSize: '0.875rem', fontWeight: 'bold'}}>
						Formas de pagamento
					</p>
					<p
						style={{
							fontSize: '1rem',
							maxWidth: '600px',
							color: '#676666',
							fontWeight: 400,
						}}
					>
						{restaurant?.payment_methods}
					</p>
				</div>
			</section>
		</main>
	);
};
