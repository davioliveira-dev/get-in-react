import {RestaurantList} from 'src/types/restaurant';
import {fetcher} from '../../services/api';

export const listRestaurants = async (
	page: number,
	limit?: number,
	search?: string,
): Promise<RestaurantList | undefined> => {
	const params = {
		page: page.toString(),
		...(limit ? {limit: limit.toString()} : {}),
		...(search ? {search} : {}),
	};

	const url = `/restaurants?${new URLSearchParams(params).toString()}`;

	return fetcher<RestaurantList>(url).then(res => res);
};
