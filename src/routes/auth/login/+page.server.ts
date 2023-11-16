import type { PageServerLoad, Actions } from './$types';
import axios from 'axios';
import { API_GATEWAY } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
	const user = cookies.get('jwt');
	return { user };
};

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		try {
			const response = await axios.post(
				`${API_GATEWAY}/authentication`,
				{
					username: data.get('email'),
					password: data.get('password')
				},
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}
			);

			cookies.set('jwt', response.data.access_token, {
				path: '/',
				httpOnly: true,
				secure: true,
				sameSite: 'lax'
			});
		} catch (error) {
			console.log(error);
			return { success: false };
		}

		return { success: true };
	}
} satisfies Actions;
