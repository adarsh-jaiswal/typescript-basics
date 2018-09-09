"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("./test");
var _ = __importStar(require("lodash"));
var foo = new test_1.Person("adarsh", "jas");
console.log(foo);
var arr = [1, 2, 3];
_.reverse(arr);
console.log(arr);
