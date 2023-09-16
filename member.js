function skillMembers() {
    var members = [];
    var member = {};
    member.name = "John";
    member.age = 30;
    member.skills = ["Javascript", "HTML", "CSS"];
    members.push(member);
    member = {};
    member.name = "Mary";
    member.age = 25;
    member.skills = ["C++", "Java", "Python"];
    members.push(member);
    return members;
}