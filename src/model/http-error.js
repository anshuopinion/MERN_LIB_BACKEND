export default class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.error = errorCode;
  }
}
