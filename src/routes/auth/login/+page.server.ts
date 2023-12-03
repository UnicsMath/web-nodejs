import type { Actions, PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ cookies }) => {
	const jwt = cookies.get('jwt');
	return { jwt };
};

export const actions = {
	default: async ({ request, fetch, cookies }) => {
		const data = await request.formData();

		try {
			const response = await fetch(`${env.API_GATEWAY}/authentication`, {
				method: 'POST',
				body: new URLSearchParams({
					username: String(data.get('email') ?? ''),
					password: String(data.get('password') ?? '')
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});

			const jwt = await response.json();

			cookies.set('jwt', JSON.stringify(jwt), {
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
