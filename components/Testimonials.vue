<template>
	<section class="background2" id="testimonials">
		<div class="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6 grid gap-8">
			<h1
				class="text-5xl font-[600] hid text-background1 text-center mb-4 leading-none"
			>
				Testimonials
			</h1>
			<div class="hid">
				<el-carousel :interval="4000" type="card" height="400px">
					<el-carousel-item>
						<div class="grid gap-5">
							<div class="p-4 flex gap-5 items-center">
								<img src="/images/client1.webp" class="rounded-full w-20" />
								<h2 class="text-white text-xl font-[600]">Erick Chamu</h2>
							</div>
							<hr />
							<p class="p-4 text-sm text-white font-[600] text-gray-300">
								I had a great time with MZ Medias, they helped me grow so much
								in my content journey. Highly recommend them for getting your
								work done.
							</p>
						</div>
					</el-carousel-item>
					<el-carousel-item>
						<div class="grid gap-5 shadow">
							<div class="p-4 flex gap-5 items-center">
								<img src="/images/client2.webp" class="rounded-full w-20" />
								<h2 class="text-white text-xl font-[600]">Spencer Pawliw</h2>
							</div>
							<hr />
							<p class="p-4 text-sm text-white font-[600] text-gray-300">
								MZ Medias has helped me a lot in my online journey to become a
								YouTuber. Their customer service is top notch along with their
								work.
							</p>
						</div>
					</el-carousel-item>
					<el-carousel-item>
						<div class="grid gap-5">
							<div class="flex gap-5 items-center p-4">
								<img src="/images/client3.webp" class="rounded-full w-20" />
								<h2 class="text-white text-xl font-[600]">Nick Barner</h2>
							</div>
							<hr />
							<p class="text-sm text-white font-[600] text-gray-300 p-4">
								Neel and his team were outputting like machines when it came to
								video editing for me and my content. They are the best in the
								game. I highly recommend that you guys use them for any video
								editing requirement!
							</p>
						</div>
					</el-carousel-item>
				</el-carousel>
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
