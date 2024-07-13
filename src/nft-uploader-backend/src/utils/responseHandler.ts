export const successResponse = (
  statusCode: number,
  message: string,
  data: any
) => {
  return JSON.stringify({
    statusCode,
    message,
    data,
  });
};

export const errorResponse = (
  statusCode: number,
  message: string,
  error: any
) => {
  return JSON.stringify({
    statusCode,
    message,
    error,
  });
};
