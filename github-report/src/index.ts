import { GitHubApiService } from "./GitHubApiService";
import { User } from './User';
import { Repo } from "./Repo";

let svc = new GitHubApiService();
//svc.getUserInfo('adarsh-jaiswal');
svc.getUserInfoWithCallBack('adarsh-jaiswal', (user: User) =>{
    console.log(user);
});

svc.getRepos('adarsh-jaiswal', (repos: Repo[]) =>{
    console.log(repos);
});