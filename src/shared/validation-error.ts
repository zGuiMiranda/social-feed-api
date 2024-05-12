export class ValidationError extends Error {
  status: number;
  validationErrorFeedback: {};

  constructor(message, status = 400) {
    super();
    this.status = status;
    this.validationErrorFeedback = { error: message, status };
  }
}
