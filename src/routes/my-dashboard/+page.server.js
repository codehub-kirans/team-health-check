
import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/assets/js/utils.js';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getUserSurveyRecords = async (userId) => {
        try {
            const records = serializeNonPOJOs(
                await locals.pb.collection('team_health').getFullList({
                    filter: `user = "${userId}"`,
                    sort: '-sprint',
                })
            );
            // console.log(records);
            return records;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    return {
        records: getUserSurveyRecords(locals.user.id)
    };
};