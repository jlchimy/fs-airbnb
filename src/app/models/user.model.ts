export class User {
  
  public password: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public id: number;
  
  constructor(password, firstname?: string, lastname?: string, email?: string) {
    this.firstname = firstname || '';
    this.lastname = lastname || '';
    this.email = email || '';
    this.password = password;
  }

  public setFirstname(firstname?: string) {
    this.firstname = firstname || '';
  }

  public setLastname(lastname?: string) {
    this.lastname = lastname || '';
  }

  

}