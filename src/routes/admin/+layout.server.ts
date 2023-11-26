import { env } from '$env/dynamic/public';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const swt = cookies.get('jwt');
	const jwt = swt ? JSON.parse(swt) : undefined;

	if (!jwt) throw redirect(308, '/auth/login');

	try {
		const response = await axios.get(`${env.PUBLIC_API_GATEWAY}/authorization`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${jwt.token_type} ${jwt.access_token}`
			}
		});

		console.log(response);
	} catch (error) {
		console.log(error);
		throw redirect(308, '/auth/login');
	}
};
