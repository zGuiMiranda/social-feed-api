import { Router } from "express";
import PostController from "./application/controller/post-controller";

const router: Router = Router();

router.post("/create", (req, res) => new PostController().createPost(req, res));
router.get("/findAll", (req, res) =>
  new PostController().findAllPosts(req, res)
);

export { router };
