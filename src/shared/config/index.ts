export type TTheme = 'dark' | 'light';

export const THEME: Record<string, TTheme> = {
	light: 'light',
	dark: 'dark',
};

export const ASSETS_PATH = '@/shared/assets/';

export { routes } from "./routes";