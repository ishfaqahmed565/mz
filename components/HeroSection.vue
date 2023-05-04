<template>
	<section class="background2 dark:bg-gray-900">
		<div class="">
			<header class="max-w-6xl mx-auto">
				<nav
					class="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
				>
					<div
						class="pb-2 border-b-[1px] border-gray-800 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
					>
						<a href="/" class="flex items-center">
							<img src="/images/mz.webp" class="w-[10rem]" />
						</a>
						<div class="relative lg:hidden">
							<button
								class="relative z-[50] lg:hidden border rounded border-red p-1"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-7 text-white fill-current"
									@click="dialogStore.toggleShowModal"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>

							<NavModal :show="showClose" @close="show = false"> </NavModal>
						</div>

						<div
							class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
							id="mobile-menu-2"
						>
							<ul
								class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
							>
								<li>
									<a
										href="#features"
										class="font-[500] block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 transition-all lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>Features</a
									>
								</li>
								<li>
									<a
										href="#services"
										class="font-[500] block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 transition-all lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>Services</a
									>
								</li>
								<li>
									<a
										href="#testimonials"
										class="font-[500] block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 transition-all lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>Testimonial</a
									>
								</li>

								<li>
									<a
										href="#contact"
										class="font-[500] block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 transition-all lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
										>Contact</a
									>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<div
				class="pt-10 max-w-6xl flex flex-col items-center justify-center mx-auto px-4 py-8 place-items-center lg:py-16"
			>
				<div class="place-self-center grid place-items-center gap-5">
					<div
						class="intro grid place-items-center text-2xl sm:text-4xl font-[500] md:text-[90px]"
					>
						<h1
							class="text-background1 max-w-[20ch] sm:max-w-[30ch] text-center mb-4 leading-none"
						>
							Empower Your Online Presence on
						</h1>
						<div class="container text-center lg:py-8">
							<span ref="sectext" class="text sec-text">Youtube</span>
						</div>
					</div>
					<p
						class="intro-text text-center max-w-[30ch] sm:max-w-[50ch] text-xs text-gray-300 mb-6 font-light lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
					>
						We help your businesses to grow by promoting your brand, creating
						dazzling contents & reaching your target audience through online
						platforms
					</p>
					<button
						class="introCta shadow1 w-[300px] text-xl h-[50px] text-white group hover:shadow-lg hover:shadow- hover:duration-1000 transition-all parent rounded-full p-3 bookBackground flex items-center relative"
					>
						<div
							class="transition-all bounce p-4 bg-white rounded-full absolute group-hover:bounce left-[5px]"
						></div>
						<span class="hide opacity-0 pl-8">Click to schedule now!</span>
						<span
							class="book pl-12 group-hover:hidden transition-all delay-1000 duration-800"
							>Book your straregy call</span
						>
					</button>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
	import { useDialogStore } from "~/stores/dialogStore.js";
	const dialogStore = useDialogStore();
	let showClose = ref(false);
	const sectext = ref("");
	onMounted(() => {
		const textLoad = () => {
			setTimeout(() => {
				sectext.value.textContent = "Youtube";
			}, 0);
			setTimeout(() => {
				sectext.value.textContent = "Tiktok";
			}, 4000);
			setTimeout(() => {
				sectext.value.textContent = "Instagram";
			}, 8000);
			setTimeout(() => {
				sectext.value.textContent = "Facebook";
			}, 12000);
		};
		textLoad();
		setInterval(textLoad, 16000);
	});
</script>
<style scoped>
	.shadow1:hover {
		box-shadow: 0px 0px 48px 0px rgba(100, 63, 213, 0.82);
		-webkit-box-shadow: 0px 0px 48px 0px rgba(100, 63, 213, 0.82);
		-moz-box-shadow: 0px 0px 48px 0px rgba(100, 63, 213, 0.82);
	}
	.bookBackground {
		background: linear-gradient(
			92.88deg,
			rgb(69, 94, 181) 9.16%,
			rgb(86, 67, 204) 43.89%,
			rgb(103, 63, 215) 64.72%
		);
	}
	.hide {
		transition: opacity 200ms, display 200ms;
		display: none;
		opacity: 0;
	}

	.parent:hover > .hide {
		display: block;
		opacity: 1;
	}
	.bounce {
		animation: reverse 1s ease 0s 1;
	}
	@keyframes reverse {
		0% {
			left: 250px;
		}

		100% {
			left: 5px;
		}
	}
	.parent:hover > .bounce {
		animation: slide 1s ease 0s 1 forwards;
	}
	@keyframes slide {
		0% {
			left: 5px;
		}

		100% {
			left: 250px;
		}
	}
	.intro {
		animation: fade-down 1s linear;
	}
	.intro-text {
		opacity: 0;
		animation: fade-down 1s linear 1.2s 1 forwards;
	}
	.introCta {
		opacity: 0;
		animation: fade-down 1s linear 2.2s 1 forwards;
	}

	@keyframes fade-down {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0px);
		}
	}
	.container {
		width: 400px;
		overflow: hidden;
	}
	.container .text {
		position: relative;
		color: #4070f4;
		background-image: -webkit-linear-gradient(
			320deg,
			#4070f4 30%,
			hsla(0, 0%, 100%, 0.38)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
	.container .text.first-text {
		color: #fff;
	}
	.text.sec-text:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #03061d;
		border-left: 3px solid #4070f4;
		animation: animate 4s steps(12) infinite;
	}
	@keyframes animate {
		40%,
		60% {
			left: calc(100% + 20px);
		}
		100% {
			left: 0%;
		}
	}

	.text-background1 {
		color: #5e5c5c;
		background-image: -webkit-linear-gradient(
			320deg,
			#ffffff 30%,
			hsla(0, 0%, 100%, 0.38)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-text-fill-color: transparent;
	}
</style>
