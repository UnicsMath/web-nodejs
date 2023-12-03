import { env } from '$env/dynamic/private';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch, cookies }) => {
	const swt = cookies.get('jwt');
	const jwt = swt ? JSON.parse(swt) : undefined;

	if (!jwt) throw redirect(308, '/auth/login');

	try {
		const response = await fetch(`${env.API_GATEWAY}/authorization`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${jwt.token_type} ${jwt.access_token}`
			}
		});

		if (response.ok) return;
	} catch (error) {
		console.log(error);

		throw redirect(308, '/auth/login');
	}
	throw redirect(308, '/auth/login');
};
