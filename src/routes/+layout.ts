import { createBrowserClient, isBrowser, parse } from '@supabase/ssr';
import type { LayoutLoad } from './$types';
// import { env } from '$env/dynamic/public';
import { setLocale } from '$i18n/i18n-svelte';
import { loadLocaleAsync } from '$i18n/i18n-util.async';

export const load: LayoutLoad = async ({ data, depends }) => {
	// depends('supabase:auth');
	// if (data) {
	// 	await loadLocaleAsync(data.locale);
	// 	setLocale(data.locale);
	// }
	// const supabase = createBrowserClient(
	// 	env.PUBLIC_SUPABASE_URL || '',
	// 	env.PUBLIC_SUPABASE_ANON_KEY || '',
	// 	{
	// 		global: {
	// 			fetch
	// 		},
	// 		cookies: {
	// 			get(key) {
	// 				if (!isBrowser()) {
	// 					return JSON.stringify(data.session);
	// 				}
	// 				const cookie = parse(document.cookie);
	// 				return cookie[key];
	// 			}
	// 		}
	// 	}
	// );
	// const {
	// 	data: { session }
	// } = await supabase.auth.getSession();
	// return { ...data, session, supabase };
};
