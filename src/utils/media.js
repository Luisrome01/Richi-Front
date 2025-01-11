const { VITE_IMAGES_ROUTE, VITE_VIDEOS_ROUTE } = import.meta.env;

export const LOGO_PNG = `${VITE_IMAGES_ROUTE}logoprueba.png`;
export const LOGO_JPG = `${VITE_IMAGES_ROUTE}logoprueba.jpg`;
export const BLUE_LOGO = `${VITE_IMAGES_ROUTE}LOGO-2.png`;
export const VIDEO_EXAMPLE = `${VITE_VIDEOS_ROUTE}videorichi.MP4`;

export const mediaMap = {
	LOGO_PNG,
	LOGO_JPG,
	BLUE_LOGO,
	VIDEO_EXAMPLE,
};
