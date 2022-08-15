const baseUrl = 'https://605d074f9386d200171ba209.mockapi.io/api/v1';

export const fetcher = async <T>(
	url: string,
	options?: RequestInit,
	notUseBaseUrl?: boolean,
) => {
	const fullUrl = notUseBaseUrl ? url : `${baseUrl}${url}`;

	const response = await fetch(fullUrl, options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	return response.json();
};
