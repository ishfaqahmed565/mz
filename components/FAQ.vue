<template>
	<section class="background2" id="faq">
		<div class="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6 grid gap-8">
			<h1
				class="text-4xl font-[600] hid text-background1 text-center mb-4 leading-none"
			>
				FAQ
			</h1>
			<div class="hid">
				<el-collapse>
					<el-collapse-item title="How to get our services?" name="1">
						<div>
							The process of working with us is straightforward, first we have
							to examine your situation by going on a quick call with you. On
							the call we will see how we can help you and how we can serve you
							in the best way possible and then we will propose a solution to
							your problems.
						</div>
					</el-collapse-item>
					<el-collapse-item title="What are your prices?" name="2">
						<div>
							The pricing depends on the package you are willing to take. We
							also offer custom packages catered to specifically your needs.
						</div>
					</el-collapse-item>
					<el-collapse-item title="What services do you provide?" name="3">
						<div>
							We offer a variety of services starting from Channel Management to
							Content Generation, SEO, Thumbnail Designing, Video Editing.
						</div>
					</el-collapse-item>
					<el-collapse-item
						title="What is the estimated elivery time?"
						name="4"
					>
						<div>
							It can vary from 24h – 48h depending on the content you provide us
							for service.
						</div>
					</el-collapse-item>
				</el-collapse>
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
