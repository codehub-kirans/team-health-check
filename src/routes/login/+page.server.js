import { error, redirect } from '@sveltejs/kit';

// Cannot prerender pages with actions
export const prerender = false;

export const actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').authWithPassword(body.username, body.password);
            /* enable when using a mail verification service
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear();
                return {
                    notVerified: true
                };
            }
            */
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong logging in');
        }

        throw redirect(303, '/');
    }
};