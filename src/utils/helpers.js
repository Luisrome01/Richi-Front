import { mediaMap } from '@/utils/media';

export function formatOptions(options) {
	const placeClasses = ['first', 'second', 'third'];

	options.icon = mediaMap[options.icon] || options.icon;

	options.locations = options.locations.map((item, index) => ({
		...item,
		icon: mediaMap[item.icon] || item.icon,
		placeClass: placeClasses[index] || '',
	}));

	return options;
}
