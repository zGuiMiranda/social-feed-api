import IUseCase from "../../../../shared/interface-use-case";
import { injectable } from "inversify";
import Post from "../../../domain/post";

@injectable()
export class EmitNewPostUseCase implements IUseCase {
  private socket: any;
  constructor(socket) {
    this.socket = socket;
  }
  async run(req: { data: Post }) {
    this.socket.emit("message", req);
    return req;
  }
}
