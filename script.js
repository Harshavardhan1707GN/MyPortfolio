document.getElementById("name").innerText = "Harshavardhan GN";
document.getElementById("title").innerText = "Data Scientist & Backend Developer";

document.getElementById("about-text").innerText =
  "I'm a passionate Data Scientist and Backend Developer from Bangalore Institute of Technology, specializing in Data Science, Machine Learning, and scalable backend systems. I enjoy turning data into actionable insights and building real-world applications.";

const skills = [
  "Python, Flask, Django",
  "SQL, BigQuery, MySQL",
  "Pandas, NumPy, Scikit-learn",
  "HTML5, CSS3, JavaScript",
  "Bootstrap 5",
  "Git, GitHub"
];

const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
  const li = document.createElement("li");
  li.innerText = skill;
  skillsList.appendChild(li);
});

const projects = [
  "Spam Email Detection: Used machine learning to classify emails as spam or not spam.",
  "Iris Flower Classification: Classification model using Scikit-learn.",
  "Unemployment Analysis: Analyzed trends during the COVID-19 period using Pandas and Matplotlib.",
  "Digital Payment App: Built with Flask for backend transaction management."
];

const projectsList = document.getElementById("projects-list");
projects.forEach(project => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${project.split(':')[0]}:</strong>${project.split(':')[1]}`;
  projectsList.appendChild(li);
});

document.getElementById("email-link").innerText = "hvgn1707@gmail.com";
document.getElementById("email-link").href = "mailto:hvgn1707@gmail.com";

document.getElementById("github-link").innerText = "github.com/harshavardhan1707gn";
document.getElementById("github-link").href = "https://github.com/harshavardhan1707gn";

document.getElementById("linkedin-link").innerText = "linkedin.com/in/harshavardhan-gn";
document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/harshavardhan-gn";

document.getElementById("college").innerText = "College: Bangalore Institute of Technology";
document.getElementById("branch").innerText = "Branch: Information Science and Engineering";

document.getElementById("year").innerText = new Date().getFullYear();
