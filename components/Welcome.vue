<script setup>
	let showVideo = ref(false);
	onMounted(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("come");
				} else {
					entry.target.classList.remove("come");
				}
			});
		});
		const hiddenElements = document.querySelectorAll(".welcome");
		hiddenElements.forEach((el) => observer.observe(el));
	});
</script>
<template>
	<section class="background2">
		<div class="py-8 lg:py-16 mx-auto grid place-items-center max-w-6xl px-4">
			<!--<iframe
				class="absolute z-[50] w-[485px] h-[285px] rounded"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				title="MZ Media Launch Video"
				src="https://www.youtube.com/embed/GG2be1MKOik?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmzmedias.com&amp;widgetid=1"
				id="widget2"
			></iframe>-->

			<div class="card welcome">
				<svg
					:class="{ block: !showVideo, hidden: showVideo }"
					@click="showVideo = true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width=".7"
					stroke="currentColor"
					class="absolute z-[60] w-20 text-white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
					/>
				</svg>

				<img
					src="/images/launch.webp"
					alt=""
					:class="{ block: !showVideo, hidden: showVideo }"
					@click="showVideo = true"
					class="absolute z-[50] w-[295px] h-[195px] sm:w-[485px] sm:h-[285px] rounded"
				/>
				<iframe
					:class="{ block: showVideo, hidden: !showVideo }"
					class="absolute z-[50] object-cover w-[280px] h-[170px] sm:w-[485px] sm:h-[285px] w-[485px] h-[285px] rounded"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					title="MZ Media Launch Video"
					src="https://www.youtube.com/embed/GG2be1MKOik?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fmzmedias.com&amp;widgetid=1"
					id="widget2"
				></iframe>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
