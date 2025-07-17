<!-- 
<script lang="ts">
    import SvelteSeo from 'svelte-seo'
    import { siteSeoBase } from './config.ts'

    interface Props {
      title: string;
      description: string;
      ogUrl: string;
  }

    let {title, description, ogUrl}: Props = $props();
</script>


<SvelteSeo
  title={title ? `${siteSeoBase.title} | ${title}` : siteSeoBase.title }
  description={description || siteSeoBase.description}
  keywords={siteSeoBase.keywords}
/> -->
