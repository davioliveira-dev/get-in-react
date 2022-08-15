type Params<T> = {
	id: string;
	data: T;
};

export const navigate = <T>(path: string, params?: Params<T>) => {
	window.sessionStorage.clear();
	if (params) {
		window.sessionStorage.setItem(params.id, JSON.stringify(params.data));
	}

	window.location.href = `${window.location.origin}${path}`;
};
