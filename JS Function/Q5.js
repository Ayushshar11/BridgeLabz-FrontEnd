function Person(name){
  this.name=name;
}
Person.prototype.showName=function(){
  console.log(this.name);
};
function Student(name,branch){
  Person.call(this,name);
  this.branch=branch;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.showBranch=function(){
  console.log(this.branch);
};
const s=new Student("Ayush","CSE");
s.showName();
s.showBranch();
