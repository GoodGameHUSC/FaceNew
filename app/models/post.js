import { topHeadLineNews, everyThingNews } from "../service/NewsApi";
import { observable } from "mobx";

class PostModel {
  
  @observable listPost = []
  @observable listHeadLine = []

  async loadTopHeadLine() {
    try {
      const listHeadLine = await topHeadLineNews();
      return listHeadLine;
    } catch (error) {
      Promise.reject(error);
    }

  }
  async loadEveryThing() {
    try {
      const listEveryThing = await everyThingNews();
      return listEveryThing;
    } catch (error) {
      Promise.reject(error);
    }
  }
}

const Post = new PostModel;
export default Post