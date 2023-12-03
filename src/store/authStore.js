import { makeAutoObservable } from "mobx";

class AuthStore{
  isAuthed = false
  constructor(){
    makeAutoObservable(this)
  }
}
const authStore = new AuthStore()
export default authStore