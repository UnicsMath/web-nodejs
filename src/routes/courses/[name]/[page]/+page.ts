import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';

type Page = {
	chapterNumber: number;
	title: string;
	description: string;
};

// type ExpressionConfiguration = {
// 	minimumLength: number;
// 	maximumLength: number;
// 	minimumConstantValue: number;
// 	maximumConstantValue: number;
// 	operators: Operators[];
// };

// enum Operators {
// 	Subtraction,
// 	Addition,
// 	Multiplication,
// 	Division,
// 	Exponents
// }

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`${env.PUBLIC_API_GATEWAY}/page/${parseInt(params.page)}`);

		if (!response.ok) return { page: null };

		return { page: await response.json() } as { page: Page };
	} catch (error) {
		console.error(error);

		return { page: null };
	}
};
