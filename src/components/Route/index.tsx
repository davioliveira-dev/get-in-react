import {useEffect, useState} from 'react';

type Props = {
	component: () => JSX.Element;
	path: string;
};

export const Route = ({path, component}: Props) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('navigate', onLocationChange);

		return () => {
			window.removeEventListener('navigate', onLocationChange);
		};
	}, []);

	return currentPath === path ? component() : null;
};
