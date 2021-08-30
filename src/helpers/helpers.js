export const getLastPage = (reposLength, reposPerPage) => {
    return Math.ceil(reposLength / reposPerPage);
};
export const getCurrentReposList = (indexOfFirstRepos, indexOfLastRepos, repositories) => {
    return repositories.slice(indexOfFirstRepos, indexOfLastRepos);
};
export function getUserRepositories(axios, userInput) {
    return axios.get(`https://api.github.com/users/${userInput}/repos`);
};
export function getUserInfo(axios, userInput) {
    return axios.get(`https://api.github.com/users/${userInput}`);
};
export function getNewPage(field, currentPage, lastPage) {
    if (field === "left") {
        if ((currentPage) === 1) {
            return currentPage;
        }
        return currentPage - 1;
    }
    if (field === "right") {
        if ((currentPage) === lastPage) {
            return currentPage;
        }
        return currentPage + 1;
    }
    return
};