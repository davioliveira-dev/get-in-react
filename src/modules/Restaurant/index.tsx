import React, {useEffect} from 'react';
import {Restaurant as RestaurantType} from '../../types/restaurant';
import {navigate} from '../../utils/navigate';

export const Restaurant = () => {
	const restaurantExists = sessionStorage.getItem('restaurant');

	useEffect(() => {
		if (!restaurantExists) {
			navigate('/home');
		}
	}, [restaurantExists]);

	const restaurant = restaurantExists ? JSON.parse(restaurantExists) as RestaurantType : null;

	return (
		<div>
			<h1>Hello {restaurant?.name}</h1>
		</div>
	);
};
