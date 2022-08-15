import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {useMediaQuery} from '../../hooks';
import {listRestaurants} from '../../api/restaurants';
import {RestaurantCard, Loading} from '../../components';
import './styles.css';

type Props = {
	search: string;
};

export const Restaurants = (props: Props) => {
	const matches = useMediaQuery('(max-width: 767px)');
	const {search} = props;
	const page = 1;
	const limit = 10;

	const {data: response, isLoading} = useQuery(
		['restaurants', {page, limit, search}],
		async () => listRestaurants(page, limit, search),
	);

	const restaurants = response?.data || [];

	return (
		<section
			className={`restaurants ${isLoading ? 'restaurants-loading' : ''} ${
				matches ? 'restaurants-mobile' : ''
			}`}
		>
			{Array.isArray(restaurants) && !isLoading ? (
				restaurants.map(restaurant => (
					<RestaurantCard key={restaurant.id} restaurant={restaurant} />
				))
			) : (
				<Loading />
			)}
		</section>
	);
};
