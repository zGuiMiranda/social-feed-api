import IUseCase from "../../../../shared/interface-use-case";
import Post from "../../../domain/post";

export class ValidateFieldsCreatePostUseCase implements IUseCase {
  async run(req: { data: Post }) {
    const { data } = req;
    if (!data.content) {
      return {
        message: "O conteúdo do post é obrigatório!",
      };
    }
    return { data };
  }
}
