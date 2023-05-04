<template>
	<section class="background2" id="contact">
		<div class="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6 grid gap-8">
			<h1
				class="text-5xl font-[600] hid text-background1 text-center mb-4 leading-none"
			>
				Contact Us
			</h1>
			<div class="hid">
				<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
				<div class="isolate px-6 pb-24 sm:pb-32 lg:px-8">
					<div
						class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
						aria-hidden="true"
					>
						<div
							class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
							style="
								clip-path: polygon(
									74.1% 44.1%,
									100% 61.6%,
									97.5% 26.9%,
									85.5% 0.1%,
									80.7% 2%,
									72.5% 32.5%,
									60.2% 62.4%,
									52.4% 68.1%,
									47.5% 58.3%,
									45.2% 34.5%,
									27.5% 76.7%,
									0.1% 64.9%,
									17.9% 100%,
									27.6% 76.8%,
									76.1% 97.7%,
									74.1% 44.1%
								);
							"
						></div>
					</div>

					<form action="#" method="POST" class="mx-auto max-w-xl">
						<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									for="first-name"
									class="block text-sm font-semibold leading-6 text-white"
									>First name</label
								>
								<div class="mt-2.5">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autocomplete="given-name"
										class="shadow block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:bg-white/[.2] text-white transition-all sm:text-sm sm:leading-6 bg-white/[.1] outline-none"
									/>
								</div>
							</div>
							<div>
								<label
									for="last-name"
									class="block text-sm font-semibold leading-6 text-white"
									>Last name</label
								>
								<div class="mt-2.5">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autocomplete="family-name"
										class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:bg-white/[.2] text-white transition-all sm:text-sm sm:leading-6 bg-white/[.1] outline-none"
									/>
								</div>
							</div>

							<div class="sm:col-span-2">
								<label
									for="email"
									class="block text-sm font-semibold leading-6 text-white"
									>Email</label
								>
								<div class="mt-2.5">
									<input
										type="email"
										name="email"
										id="email"
										autocomplete="email"
										class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:bg-white/[.2] text-white transition-all sm:text-sm sm:leading-6 bg-white/[.1] outline-none"
									/>
								</div>
							</div>

							<div class="sm:col-span-2">
								<label
									for="message"
									class="block text-sm font-semibold leading-6 text-white"
									>Message</label
								>
								<div class="mt-2.5">
									<textarea
										name="message"
										id="message"
										rows="4"
										class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:bg-white/[.2] text-white transition-all sm:text-sm sm:leading-6 bg-white/[.1] outline-none"
									></textarea>
								</div>
							</div>
						</div>
						<div class="mt-10">
							<button
								type="submit"
								class="transition-all duration-1000 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm shadow1 bookBackground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Let's talk
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped>
	.el-carousel__item h3 {
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
		text-align: center;
	}
	.el-carousel__item:nth-child(n) {
		background-color: #03061e;
		border: 1px solid rgb(31, 31, 31);
	}
</style>
