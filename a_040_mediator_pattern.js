function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  sendMessage: function (message, receiver) {
    this.chatroom.sendMessage(message, this, receiver);
  },
  receiveMessage: function (message, sender) {
    console.log(
      `Message: ${message} , Sender: ${sender.name}, Receiver Name: ${this.name}`
    );
  },
};

function Chatroom() {
  this.members = {};
}

Chatroom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  sendMessage: function (message, sender, receiver) {
    receiver.receiveMessage(message, sender);
  },
};

let john = new Member("John");
let shawn = new Member("shawn");

let chatroom = new Chatroom();
chatroom.addMember(john);
chatroom.addMember(shawn);
john.sendMessage("Hello from John", shawn);
