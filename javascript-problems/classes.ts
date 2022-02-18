export class User {
  name="";
  isLogin=false;
  lastLoginTimestamp=0;

  constructor(name: string) {
    this.setName(name);
  }

  isLoggedIn() {
    return this.isLogin;
  }
  
  getLastLoggedInAt() {
    return '';
  }
  
  logIn() {
    this.isLogin = true;
    this.lastLoginTimestamp = Date.now();
    //TODO: promise
  }
  
  logOut() {
    this.isLogin = false;
  }

  getName() {
    return this.name;
  }
  
  setName(name: string) {
    this.name = name;
  }

  canEdit(comment: Comment) {
  }
  
  canDelete(comment: Comment) {
    return false;
  }
}

export class Moderator {}

export class Admin {}


export class Comment {
  constructor(author: User, message: string, repliedTo?: Comment) {
    // this.setMessage()
  }

  getMessage() {}
  
  setMessage(message: string) {}
  
  getCreatedAt() {}
  
  getAuthor() {}
  
  getRepliedTo() {}
  
  toString() {}
}