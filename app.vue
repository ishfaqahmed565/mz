<script setup>
	onMounted(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("sh1");
				} else {
					entry.target.classList.remove("sh1");
				}
			});
		});
		const hiddenElements = document.querySelectorAll(".hid");
		hiddenElements.forEach((el) => observer.observe(el));
	});
</script>
<template>
	<HeroSection />
	<Welcome />

	<Features />
	<Services />
	<Long />
	<Short />
	<Thumbnails />
	<Testimonials />
	<FAQ />
	<Contact />
	<FooterSec />
</template>
<style scoped>
	.background1 {
		background: radial-gradient(
			ellipse 80% 50% at 50% -20%,
			rgba(120, 119, 198, 0.3),
			rgba(255, 255, 255, 0)
		);
	}
</style>
