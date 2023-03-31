import { GUESTBOOK_API_KEY } from "$env/static/private";

export const load = () => {
	const posts = fetch("https://api.netlify.com/api/v1/forms/641a1fe6cb18cd0008964769/submissions/", {
			headers: {Authorization: 'Bearer ' + GUESTBOOK_API_KEY}
		})
		.then((response) => response.json())
		.then((data) => {
			console.log("Data loaded");

			let cleanData = [];
			data.forEach(element => {
				cleanData.push({
					name: element.data.name,
					date: element.created_at,
					message: element.data.message
				});
			});

			return cleanData;
		})
		.catch(error => {
			console.log(error);
		});
	
	return {
		streamed: {
			posts: posts
		}
	};
}
/*
export const actions = {
	default: async (event) => {
		const form = event.target;
		const formData = new FormData(form);
		//submitting = true;
		
		event.fetch("/guestbook", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
		.then(() => {
			console.log("Form submitted");
			//success = true;
			//submitting = false;
			//form.reset();
		})
		.catch((error) => {
			console.log(error);
			//submitting = false;
		});

		return {
			success: true
		};
	}
};
*/