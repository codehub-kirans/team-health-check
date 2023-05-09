import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/assets/js/utils.js';


export const load = ({ locals }) => {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/');
    }

    const getTeamRecords = async () => {
        try {
            const records = serializeNonPOJOs(
                await locals.pb.collection('teams').getFullList()
            );

            return records;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        records: getTeamRecords(),
    };
};

export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());
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