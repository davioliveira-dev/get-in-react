import React from 'react';
import Logo from '../../../assets/logo.svg';
import Background from '../../../assets/background.png';
import {useMediaQuery} from '../../../hooks';
import './styles.css';

export const Header = () => {
	const matches = useMediaQuery('(max-width: 767px)');

	return (
		<header style={{backgroundImage: `url('${Background}')`}} className={matches ? 'mobile-header' : ''}>
			<Logo />
			<aside>
				<h1>Descubra novos sabores</h1>
				<p>Aqui eu converso com você sobre nossa proposta</p>
			</aside>
		</header>
	);
};
