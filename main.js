async function fetchGitHubData() {
    try {
        const response = await fetch('https://api.github.com/users/ogiansouza');
        const data = await response.json();

        document.querySelector('.profile-avatar').src = data.avatar_url;
        document.querySelector('.profile-name').textContent = data.name;
        document.querySelector('.profile-username').textContent = '@' + data.login;
        document.querySelector('.numbers-item:nth-child(1) span').textContent = data.public_repos;
        document.querySelector('.numbers-item:nth-child(2) span').textContent = data.followers;
        document.querySelector('.numbers-item:nth-child(3) span').textContent = data.following;
        document.querySelector('.profile-link').href = data.html_url;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchGitHubData);
