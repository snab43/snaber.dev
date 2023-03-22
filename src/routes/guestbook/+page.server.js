import { GUESTBOOK_API_KEY } from "$env/static/private";

export async function load() {
	let posts = [];

	const data = await fetch("https://api.netlify.com/api/v1/forms/641a1fe6cb18cd0008964769/submissions/", {
			headers: {Authorization: 'Bearer ' + GUESTBOOK_API_KEY}
		})
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch(error => {
			console.log(error);
		});

	data.forEach(element => {
		posts.push({
			name: element.data.name,
			date: element.created_at,
			message: element.data.message
		});
	});
	
	return { posts: posts };
}