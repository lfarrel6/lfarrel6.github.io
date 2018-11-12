$(document).ready(function(){
	$("#clickable-name").click(function(){
		window.location.href = ('../../index.html');
	});
	displayProjects();
});

function displayProjects(){
	console.log("Projects: " + JSON.stringify(projects));
	for(var i = 0; i < Object.keys(projects).length; i++){
		let {title, subtitle, languages, link, role} = projects[i];
		//<img src=${projects[i].img} alt=${projects[i].title}>
		$("#showcase").append(`<li><p class="role">Role: ${role}</p><div class="main-info"><a target="_blank" href=${link.url}><h3>${title}</h3></a><p>${subtitle}</p></div><p class="languages">Languages: ${languages}</p>${link.github?`<a href=${link} class="github"><img src="../../assets/GitHub-Mark-Light-32px.png" alt="View the project on githubh"/></a>`:''}</li>`);
	}
}