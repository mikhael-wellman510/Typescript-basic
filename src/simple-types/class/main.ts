import { Profile } from "./interface";
import { ProfileServiceImpl } from "./profileServiceImpl";
import { add1, add2, add3, add4 } from "./sampleData";

const profile1 = new ProfileServiceImpl();

profile1.addProfile(add1);
profile1.addProfile(add2);
profile1.addProfile(add3);
// console.log(profile1.findAll());
// console.log(profile1.getName(2));
console.log("hasil updatded === :  ", profile1.updated(1, add4));
console.log("find:  ", profile1.findAll());
console.log(profile1.deleted(1));
console.log("find new updated : ", profile1.findAll());
