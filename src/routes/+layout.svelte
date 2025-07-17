<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { invalidate } from '$app/navigation';
	import { Layout } from '$sharedUi';

	type Props = {
		data: LayoutData;
		children: Snippet; 
	};

	let { data, children }: Props = $props();

	// $effect(() => {
	// 	const result = data.supabase.auth.onAuthStateChange((event, _session) => {
	// 		if (_session?.expires_at !== data.session?.expires_at) {
	// 			invalidate('supabase:auth');
	// 		}
	// 	});

	// 	return () => result.data.subscription.unsubscribe();
	// });
</script>

<Layout>
	{@render children?.()}
</Layout>

