import React, {useState} from 'react';
import Logo from '../../assets/logo.svg';
import Background from '../../assets/background.png';
import SearchIcon from '../../assets/search-icon.png';
import {SearchInput} from '../../components';
import {Restaurants} from '../Restaurants';
import './styles.css';

export const Home = () => {
	const [search, setSearch] = useState('');

	return (
		<main className='home-section'>
			<header style={{backgroundImage: `url('${Background}')`}}>
				<Logo />
				<aside>
					<h1>Descubra novos sabores</h1>
					<p>Aqui eu converso com você sobre nossa proposta</p>
				</aside>
			</header>

			<section className='section-content'>
				<article className='search'>
					<SearchInput
						placeholder='Encontre um restaurante'
						icon={SearchIcon}
						onChange={e => {
							setSearch(e.currentTarget.value);
						}}
					/>
					<div>
						<h1>Restaurantes</h1>
						<Restaurants search={search} />
					</div>
				</article>
			</section>
		</main>
	);
};
