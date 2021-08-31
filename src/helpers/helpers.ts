import { IRepository } from "../components/atoms/Repository/Repository";

export const getLastPage = (reposLength:number, reposPerPage:number) => {
    return Math.ceil(reposLength / reposPerPage);
};
export const getCurrentReposList = (indexOfFirstRepos:number, indexOfLastRepos:number, repositories:IRepository[]) => {
    return repositories.slice(indexOfFirstRepos, indexOfLastRepos);
};
export function getUserRepositories(axios:any, userInput:string) {
    return axios.get(`https://api.github.com/users/${userInput}/repos`);
};
export function getUserInfo(axios:any, userInput:string) {
    return axios.get(`https://api.github.com/users/${userInput}`);
};
export function getNewPage(field:string, currentPage:number, lastPage:number) {
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