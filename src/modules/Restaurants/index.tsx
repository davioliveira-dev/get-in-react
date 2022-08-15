import {useQuery} from '@tanstack/react-query';
import React, {useState} from 'react';
import {listRestaurants} from '../../api/restaurants';
import {RestaurantCard, Loading} from '../../components';
import './styles.css';

type Props = {
	search: string;
};

export const Restaurants = (props: Props) => {
	const {search} = props;
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);

	const {data: response, isLoading} = useQuery(
		['restaurants', {page, limit, search}],
		async () => listRestaurants(page, limit, search),
	);

	const restaurants = response?.data || [];

	return (
		<section
			className={`restaurants ${isLoading ? 'restaurants-loading' : ''}`}
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
