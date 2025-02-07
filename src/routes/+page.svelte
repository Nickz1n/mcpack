<script>
	import logo from '$lib/images/logo-new.png'
	import hylex from '$lib/images/hylex.png'
	import lothus from '$lib/images/lothus.png'
	import sunflower from '$lib/images/sunflower.png'
</script>

<svelte:head>
	<title>MCPack - Resourcepacks</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
        <img class="logo_homepage" src={logo} alt="MCPack.pro Logo">
        <h1 class="site_description">Eu desenho coisas lindamente simples, codifico coisas complexas e transformo criatividade em arte.</h1>
        <p class="site_description_small">Amo o que faço, mas estou sempre em busca de novidades.</p>
        <div class="site_description_divider"><hr></div>
        <a class="action_button comparison_button" href="#creator">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="20 -32 256 256">
                <path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path>
            </svg>
            Minhas criações
        </a>
</section>

<section class="content_section" id="creator">
	<h2>NickZ'in Packs</h2>
	<div class="carousel">
		<button class="scroll_button scroll_left_button" id="scroll_left_button"  aria-label="Anterior" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" viewBox="0 0 256 256">
				<path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
			</svg></button>
		<div class="carousel_items">
			<div class="homepage_card">
				<a href="https://pvprp.com/pack?p=15428&or=profile">
					<div class="homepage_card_image"><img src={hylex} alt="Hylex 512x" loading="lazy"></div>
					<div class="homepage_card_title">
						<p>Hylex [512x]</p>
					</div>
				</a>
			</div>
			<div class="homepage_card">
				<a href="https://pvprp.com/pack?p=15990&or=profile">
					<div class="homepage_card_image"><img src={lothus} alt="Lothus 32x" loading="lazy"></div>
					<div class="homepage_card_title">
						<p>Lothus [32x]</p>
					</div>
				</a>
			</div>
			<div class="homepage_card">
				<a href="https://pvprp.com/pack?p=16416&or=profile">
					<div class="homepage_card_image"><img src={sunflower} alt="32x" loading="lazy"></div>
					<div class="homepage_card_title">
						<p>Sunflower [32x]</p>
					</div>
				</a>
			</div>
		</div>
		<button class="scroll_button" id="scroll_right_button" type="button" aria-label="Próximo">
			<svg xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="currentColor" viewBox="0 0 256 256">
			  <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
			</svg>
		  </button>
	</div>
</section>


