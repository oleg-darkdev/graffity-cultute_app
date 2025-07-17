import type { Session, SupabaseClient, User } from '@supabase/supabase-js';
import type { Locales, TranslationFunctions } from '$i18n/i18n-types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locales;
			LL: TranslationFunctions;
			supabase: SupabaseClient;
			safeGetSession(): Promise<{ session: Session | null; user: User | null }>;
		}
		interface PageData {
			session: Session | null;
			user: User | null;
		}
		

		// interface PageState {}
		// interface Platform {}
	}
}

export {};
