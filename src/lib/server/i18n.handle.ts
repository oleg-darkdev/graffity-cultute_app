import type { Handle, RequestEvent } from '@sveltejs/kit';
import type { Locales } from '$i18n/i18n-types';
import { baseLocale, i18n, isLocale } from '$i18n/i18n-util';
import { loadAllLocales } from '$i18n/i18n-util.sync';

loadAllLocales();

const L = i18n();

export const i18nHandle: Handle = async ({ event, resolve }) => {
	// read language slug
	const locale = getPreferredLocale(event);
	const LL = L[locale];

	// bind locale and translation functions to current request
	event.locals.locale = locale;
	event.locals.LL = LL;

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
};

function getPreferredLocale(event: RequestEvent): Locales {
	const localeFromParams = event.params.locale;

	if (!localeFromParams || !isLocale(localeFromParams)) {
		return baseLocale;
	}

	return localeFromParams as Locales;
}
