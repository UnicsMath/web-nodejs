import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';

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

export const load: PageLoad = async ({ fetch, params }) => {
	try {
		const response = await fetch(`${env.PUBLIC_API_GATEWAY}/course/${params.name}`);

		if (!response.ok) return { course: null };

		return { course: await response.json() } as { course: Course };
	} catch (error) {
		console.error(error);

		return { course: null };
	}
};
