import type { PageLoad } from './$types';
//import axios from 'axios';

// type Chapter = {
// 	id: number;
// 	title: string;
// 	description: string;
// 	expressionConfigurationModel: ExpressionConfiguration;
// };

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

/*export const load: PageLoad = async ({ params }) => {
    try {
        return { weatherForecast: (await axios.get(`http://localhost:5279/content/${params.slug}`)).data as WeatherForecast[] };
    } catch (error) {
        console.error(error);
    }
};*/

export const load: PageLoad = ({ params }) => {
	type Content = {
		title: string;
		text: string;
		contents: string[];
	};

	const content: Content = { title: '', text: '', contents: [] };

	switch (params.slug) {
		case 'pre-algebra':
			content.title = 'Pre algebra';
			content.text = 'Everything you need to know before starting algebra';
			content.contents = [
				'Whole Numbers',
				'The Language of Algebra',
				'Integers',
				'Fractions',
				'Decimals',
				'Percents',
				'The properties of Real Numbers',
				'Solving Linear Equations',
				'Math Models and Geometry',
				'Polynomials',
				'Graphs'
			];
			break;
		default:
			content.title = 'Course is empty';
			content.text = 'Go back to courses';
			content.contents = ['No content'];
			break;
	}

	return { content };
};
