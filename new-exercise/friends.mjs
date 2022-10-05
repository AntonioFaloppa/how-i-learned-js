function Friend ({
    firstName,
    lastName,
    birthdate,
    color,
    catchPhrase,
}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.color = color;
    this.catchPhrase = catchPhrase;
    this.fullName = `${firstName} ${lastName}`;
    Object.defineProperty(this, "age", {
        get: function () {
            const now = new Date();
            const birthdate = new Date(this.birthdate);
            const _age = now.getTime() - birthdate.getTime();
            return Math.floor(_age / (1000*60*60*24*365));
        }
    });
};
Friend.prototype.introduce = function () {
    return `Hello, my name is ${this.firstName} ${this.catchPhrase}!!`;
};
export default Friend;

// console.log(this.fullname);
// module.exports = {
//     Friend: Friend
// };

//new Friend(Data): -> an instance of a friend with values of data