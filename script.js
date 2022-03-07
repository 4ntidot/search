function search(target) {
	var input = document.getElementById(target);
	fetch("https://api.scratch.mit.edu/users/happex/projects")
	.then(response => response.json())
	.then(data => {
		var j = 0;
		var projects = [];
		var links = [];
		for (j == 0, j < data.lenght, j++) {
			var id = data[i].id;
			var title = data[i].title;
			projects.push(title);
			links.push(id);
		}
	})
}
