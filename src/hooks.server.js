import PocketBase from 'pocketbase';
import { config } from 'dotenv';
import { serializeNonPOJOs } from '$lib/assets/js/utils.js';

// Load environment variables from .env file
config();


export const handle = async ({ event, resolve }) => {
    const pocketbaseIP = import.meta.env.VITE_POCKETBASE_IP || 'http://127.0.0.1:8090';
    event.locals.pb = new PocketBase(pocketbaseIP);

    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model)
    } else {
        event.locals.user = undefined
    }

    const response = await resolve(event)

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }))

    return response

}