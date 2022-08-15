import React, {useState} from 'react';
import {useMediaQuery} from '../../hooks';
import SearchIcon from '../../assets/search-icon.png';
import {SearchInput, Header} from '../../components';
import {Restaurants} from '../Restaurants';
import './styles.css';

export const Home = () => {
	const matches = useMediaQuery('(max-width: 767px)');
	const [search, setSearch] = useState('');

	return (
		<main className='home-section'>
			<Header />

			<section className='section-content'>
				<article className='search'>
					<SearchInput
						placeholder='Encontre um restaurante'
						icon={SearchIcon}
						onChange={e => {
							setSearch(e.currentTarget.value);
						}}
						maxLength={30}
					/>
					<div
						className={`result-container ${
							matches ? 'result-container-mobile' : ''
						}`}
					>
						{search ? (
							<section className='search-result'>
								<h1>Restaurantes</h1>
								<div>
									<p>Resultados para: </p>
									<h2>{search}</h2>
								</div>
							</section>
						) : (
							<h1>Restaurantes</h1>
						)}
						<Restaurants search={search} />
					</div>
				</article>
			</section>
		</main>
	);
};
