"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    // constructor(login: string, fullName: string, repoCount: number, followerCount: number, repos : Repo[]) {
    //     this.login = login;
    //     this.fullName = fullName;
    //     this.repoCount = repoCount;
    //     this.followerCount = followerCount;
    //     this.repos = repos;
    // }
    function User(userResponse) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.repos = repos;
    }
    return User;
}());
exports.User = User;
