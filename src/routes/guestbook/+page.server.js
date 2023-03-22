import { GUESTBOOK_API_KEY } from "$env/static/private";

export function load() {
	return { GUESTBOOK_API_KEY: GUESTBOOK_API_KEY };
}