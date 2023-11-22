import type { Actions, PageServerLoad } from './$types';
import axios from 'axios';
import { env } from '$env/dynamic/private';

interface AuthenticationResponse {
	access_token: string;
	token_type: string;
}

export const load: PageServerLoad = async ({ cookies }) => {
	const user = cookies.get('jwt');
	return { user };
};

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		try {
			const response = await axios.post<AuthenticationResponse>(
				`${env.API_GATEWAY}/authentication`,
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
