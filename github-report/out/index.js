"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApiService_1 = require("./GitHubApiService");
var svc = new GitHubApiService_1.GitHubApiService();
//svc.getUserInfo('adarsh-jaiswal');
svc.getUserInfoWithCallBack('adarsh-jaiswal', function (user) {
    console.log(user);
});
svc.getRepos('adarsh-jaiswal', function (repos) {
    console.log(repos);
});
