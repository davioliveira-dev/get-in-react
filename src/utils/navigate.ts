type Params<T> = {
	id: string;
	data: T;
};

export const navigate = <T>(path: string, params?: Params<T>) => {
	window.location.href = `${window.location.origin}${path}`;
	window.sessionStorage.setItem(params.id, JSON.stringify(params.data));
};
