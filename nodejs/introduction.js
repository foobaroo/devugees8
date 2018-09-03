function introduction(userInfo) {
    console.log(`Hi my name is 
    ${userInfo.firstName} ${userInfo.lastName} and my email is ${userInfo.email}. I was born in 
    ${userInfo.birthYear}`);
}

module.exports.introduction = introduction;