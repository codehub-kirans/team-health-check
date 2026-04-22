
import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/assets/js/utils.js';

export const load = async ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getSurveyRecords = async () => {
        try {
            const records = serializeNonPOJOs(
                await locals.pb.collection('team_summary').getFullList({
                    sort: '-sprint',
                })
            );
            return records;
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    const getTeamsRecords = async () => {
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

    const getCommentRecords = async () => {
        try {
            const raw = serializeNonPOJOs(
                await locals.pb.collection('team_comments').getFullList({
                    sort: '-sprint'
                })
            );

            // Strip the synthetic id; keep only sprint, team, and *_comment fields.
            return raw.map((row) => {
                const out = { sprint: row.sprint, team: row.team ?? null };
                for (const [k, v] of Object.entries(row)) {
                    if (k.endsWith('_comment')) {
                        out[k] = v;
                    }
                }
                return out;
            });
        } catch (err) {
            console.log('Error: ', err);
            throw error(err.status, err.message);
        }
    };

    const [records, teams, comments] = await Promise.all([
        getSurveyRecords(),
        getTeamsRecords(),
        getCommentRecords(),
    ]);
    return { records, teams, comments };
};