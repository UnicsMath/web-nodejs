import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';
import axios from 'axios';

type Course = {
	name: string;
	description: string;
	created: string;
	updated: string;
	author: {
		name: string;
		title: string;
		degree: string;
	};
	chapters: string[];
};

export const load: PageLoad = async ({ params }) => {
	try {
		const course: Course = await axios.get(`${env.PUBLIC_API_GATEWAY}/Course/${params.name}`);
		return { course };
	} catch (error) {
		console.error(error);
	}
};
