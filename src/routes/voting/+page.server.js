import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/assets/js/utils.js';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getSprintsRecords = async () => {
        try {
            const records = serializeNonPOJOs(
                await locals.pb.collection('sprints').getFullList({
                    sort: '-sprint'
                })
            );

            return records;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    const getVotedSprints = async (userId) => {
        try {
            const records = serializeNonPOJOs(
                await locals.pb.collection('team_health').getFullList({
                    filter: `user = "${userId}"`,
                    sort: '-sprint',
                })
            );

            return records;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        sprints: getSprintsRecords(),
        votedSprints: getVotedSprints(locals.user.id),
    }
};

export const actions = {
    create: async ({ request, locals }) => {
        const formData = await request.formData();

        formData.append('user', locals.user.id);
        // console.log(formData);
        try {
            await locals.pb.collection('team_health').create(formData);
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }

        throw redirect(303, '/team-dashboard');
    }
};