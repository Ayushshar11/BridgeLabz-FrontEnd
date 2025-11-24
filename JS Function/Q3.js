const user = {
  name: "Ayush",
  showName: () => console.log(this.name)
};
user.showName(); // undefined
const fixedUser = {
  name: "Ayush",
  showName: function() { console.log(this.name); }
};
fixedUser.showName();
