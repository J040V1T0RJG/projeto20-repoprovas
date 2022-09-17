type AppErrorTypes = "conflict" | "not_found" | "unauthorized" | "wrong_schema";

interface AppError {
  type: AppErrorTypes;
  message: string;
};

const isAppError = (error: object): error is AppError => {
  return (error as AppError).type !== undefined;
};

const errorTypeToStatusCode = (type: AppErrorTypes) => {
  if (type === "unauthorized") return 401;
  if (type === "not_found") return 404;
  if (type === "conflict") return 409;
  if (type === "wrong_schema") return 422;
  
  return 400;
};

const conflictError = (message: string): AppError => {
  return { type: "conflict", message };
};

const notFoundError = (message: string): AppError => {
  return { type: "not_found", message };
};

const unauthorizedError = (message: string): AppError => {
  return { type: "unauthorized", message };
};

const wrongSchemaError = (message: string): AppError => {
  return { type: "wrong_schema", message };
};

export {
    AppError,
    isAppError,
    errorTypeToStatusCode,
    conflictError,
    notFoundError,
    unauthorizedError,
    wrongSchemaError
};