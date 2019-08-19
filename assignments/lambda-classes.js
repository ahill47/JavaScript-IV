// CODE here for your Lambda Classes
class People {
    constructor(attr){
        this.name=attr.name;
        this.gender=attr.gender;
        this.age=attr.age;   
        this.location=attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends People{
    constructor(attr){
        this.specialty=attr.specialty;
        this.favLanguage=attr.favLanguage;
        this.catchphase=attr.catchphase;       
    }
    demo (){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){

        return '{student.name} receives a perfect score on {subject}';
    }
}

class Student extends People{
    constructor(studentattr){
        super(studentattr)
        this.previousBackground=studentattr.previousBackground;
        this.className=studentattr.className;
        this.favSubjects= studentattr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(`One favorite subject is: ${subject}`);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class projectManager extends Instructor{
    constructor(attriPM){
        super(attriPM)
        this.gradClassName=attriPM.gradClassName;
        this.favInstructor=attriPM.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}: #${channel} standy times!​​​​​`;
    }
    debugsCode (student, subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const Alexis = new People({
    name: "Alexis Hill",
    age: 30,
    location: "Avon, CT",
    gender: "F",
});

Alexis.speak();

const AlexisH = new Student ({
    name: "Alexis",
    age: 30,
    location: "CT",
    gender: "Female",
    previousBackground: "Chemiacal Engineer",
    className: "WEBPT9",
    favSubjects: ["School", "Math", " engineering"],
    grade: 100,
});
console.log(AlexisH.speak());
console.log(AlexisH.PRAssignment("Java"));
console.log(AlexisH.sprintChallenge("React"));
console.log(AlexisH.grade);

const James = new ProjectManager ({
    name: "James Stark",
    age: 25,
    location: "Moon",
    gender: "Male",
    specialty: "Software Engineering",
    favLanguage: "CSS",
    catchPhrase: " He loves cats",
    gradClassName: "Stark"
});
const Dan = new Instructor ({
    name: "Dan Frehner",
    age: 35,
    location: "Wyoming",
    gender: "Male",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "La Croix!",
});




