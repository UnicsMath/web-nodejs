<script context="module">
	const courses = [
		{ class1: 'version', class2: 'title', text1: 'Pre', text2: 'algebra' },
		{ class1: 'version', class2: 'title', text1: 'Elementary', text2: 'algebra' },
		{ class1: 'version', class2: 'title', text1: 'College', text2: 'algebra' },
		{ class1: 'version', class2: 'title', text1: 'Intermediate', text2: 'algebra' },
		{ class1: 'version', class2: 'title', text1: 'Pre', text2: 'calculus' },
		{ class1: 'title', class2: 'version', text1: 'Calculus', text2: 'Volume 1' },
		{ class1: 'title', class2: 'version', text1: 'Calculus', text2: 'Volume 2' },
		{ class1: 'title', class2: 'version', text1: 'Calculus', text2: 'Volume 3' }
	];
</script>

<svelte:head>
	<title>Courses</title>
	<meta name="description" content="All 8 courses to learn everything math." />
</svelte:head>

<nav>
	<h1>Welcome Long, pick a course.</h1>
	<ul>
		{#each courses as course}
			<li>
				<a href="/courses/{course.text1.toLowerCase()}-{course.text2.replace(/\s/g, '-')}">
					<div>
						<span class={course.class1}>{course.text1}</span>
						<span class={course.class2}>{course.text2}</span>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	@import '../../lib/stylesheet/design/design.scss';

	h1 {
		text-align: center;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 50px;
	}

	a {
		display: grid;
		place-items: center;
		width: 250px;
		height: 250px;
		border-radius: 10px;
	}

	div {
		text-align: start;
	}

	span {
		display: block;
	}

	li {
		@for $i from 1 through length($courseBackgroundColors) {
			&:nth-child(#{$i}) > a:nth-child(1) {
				background-color: nth($courseBackgroundColors, $i);
				color: nth($courseFontColors, $i);
			}
		}
	}

	.title {
		@include Heading-XL;
	}

	.version {
		@include Body-LG;
	}

	@media screen and (max-width: 1170px), screen and (max-height: 970px) {
		nav {
			height: fit-content;
		}
	}
</style>
