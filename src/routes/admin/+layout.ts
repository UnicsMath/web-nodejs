import { env } from '$env/dynamic/public';
import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import axios from 'axios';

export const load: LayoutLoad = async () => {
	const jwt = localStorage.getItem('jwt');

	if (!jwt) throw redirect(308, '/auth/login');

	try {
		const response = await axios.post(
			`${env.PUBLIC_API_GATEWAY}/authorization`,
			{ jwt: jwt },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`
				}
			}
		);

		console.log(response);
	} catch (error) {
		console.log(error);
		throw redirect(308, '/auth/login');
	}
};
