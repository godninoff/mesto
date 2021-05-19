export class UserInfo {
  constructor({userName, userJob}) {
    this._name = document.querySelector(userName);
    this._job = document.querySelector(userJob);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
  }

  setUserInfo({userNameValue, userJobValue}) {
    this._name.textContent = userNameValue;
    this._job.textContent = userJobValue;
  }
}