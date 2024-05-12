interface Response {
  data?: any;
  message?: string;
}

export default interface IUseCase {
  run(req: { data?: any }): Promise<Response>;
}
