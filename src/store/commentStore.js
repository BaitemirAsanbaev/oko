import { makeAutoObservable } from "mobx";

class CommentStore {
  comments = [
    {
      author: "user123",
      message:
        "lorem lorekrkelwnfs f wsdfsdjhds fdsfdshf dsjf dhsfds fjhds fjhds fjgds fj sdjfsdf",
    },
    {
      author: "user4324",
      message: "ldasfdsaf f wsdfsdjhadsff dhsfds fjhds fjhds fjgds fj sddsfa",
    },
    {
      author: "kukuhaagkl",
      message:
        "ldsfaasdfdsfdshf dsjf dafasdfdfds fjhds fjhds adsf fj sdjfsdsafdf",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addComment(newComment) {
    this.comments = [...this.comments, newComment];
  }
}

const commentStore = new CommentStore
export default commentStore