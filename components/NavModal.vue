<script setup>
	import { useDialogStore } from "~/stores/dialogStore.js";
	const dialogStore = useDialogStore();
	let navLinks = [
		{ name: "Features", to: "#features" },
		{ name: "Services", to: "#services" },
		{ name: "Testimonials", to: "#testimonials" },
		{ name: "FAQ", to: "#faq" },
		{ name: "Contact", to: "#contact" },
	];
	let props = defineProps({
		show: Boolean,
	});
</script>
<template>
	<Transition name="wrapper">
		<div
			v-if="dialogStore.showModal"
			class="modal-mask bg-black bg-opacity-90 opacity-[.9] z-[60]"
		>
			<div class="background-none">
				<button
					class="fixed right-[18px] top-[15px] z-[70] lg:hidden border rounded border-red p-1"
				>
					<svg
						v-show="dialogStore.showModal"
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
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<ul class="py-[4.5rem] grid gap-5">
					<li
						@click="dialogStore.toggleShowModal"
						class="grid gap-5"
						v-for="nav in navLinks"
						:key="nav.name"
					>
						<a :href="nav.to" exact class="text-2xl w-full pl-6 text-white">{{
							nav.name
						}}</a>
						<hr class="border-t-[1.2px] border-gray-800" />
					</li>
				</ul>
			</div>
		</div>
	</Transition>
</template>
<style>
	.wrapper-enter-active {
		animation-name: finished;
		animation-duration: 0.2s;
	}
	.wrapper-leave-active {
		animation: finished 0.2s reverse;
	}
	@keyframes finished {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 0.9;
		}
	}
	.router-link-exact-active {
		color: #dc313b;
	}
	.background-none {
		background: none;
	}
	.modal-mask {
		position: fixed;
		inset: 0;
		backdrop-filter: blur(4px);
	}
	.modal-container {
		background: white;
		padding: 1rem;
		width: 80vw;
		max-width: 500px;
		border-radius: 7px;
	}
	.modal-footer {
		border-top: 1px solid #ddd;
		margin-top: 1rem;
		padding-top: 0.5rem;
		font-size: 0.8rem;
	}
	.modal-footer button {
		background: #ddd;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
	}
	.modal-footer button:hover {
		background: rgb(157, 154, 154);
	}
</style>
