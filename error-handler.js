// classlarni ishlatishdan maqsad har bitta error biz qo'lda berolmaymiz.
// shuning uchun ham class ichida yoib ketamiz.

export class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;

    Error.captureStackTrace(this, this.constructor);
  }
}
export class NotFoundError extends CustomError {
  constructor(message = "Not found") {
    super(message, 404);
  }
}
export class ValidationError extends CustomError {
  constructor(message = "Validation error") {
    super(message, 422);
  }
}
