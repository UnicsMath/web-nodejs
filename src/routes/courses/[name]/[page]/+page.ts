import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';
import axios from 'axios';

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

export const load: PageLoad = async ({ params }) => {
	try {
		const page: Page = await axios.get(`${env.PUBLIC_API_GATEWAY}/Page/${params.page}`);
		return { page };
	} catch (error) {
		console.error(error);
	}
};
