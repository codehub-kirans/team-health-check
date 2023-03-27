import { error, redirect } from '@sveltejs/kit';


export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/');
    }
};

export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());
        console.log(body.username);

        let username = body.username.split(' ').join('').toLowerCase();

        try {
            await locals.pb.collection('users').create({ username, ...body });
            //await locals.pb.collection('users').requestVerification(body.email);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/login');
    }
};