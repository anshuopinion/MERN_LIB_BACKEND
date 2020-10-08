export default class HttpError extends Error {
  constructor(message, error) {
    super(message);
    this.error = error;
  }
}
