import React from 'react';
import {navigate} from '../../../utils/navigate';
import {Restaurant as RestaurantType} from '../../../types/restaurant';
import './styles.css';

type Props = {
	restaurant: RestaurantType;
};

export const RestaurantCard = ({restaurant}: Props) => (
	<div
		className='restaurant-card'
		style={{
			backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${restaurant.image})`,
		}}
		onClick={() => {
			navigate('/restaurant', {id: 'restaurant', data: restaurant});
		}}
	>
		<p>{restaurant.name}</p>
	</div>
);
