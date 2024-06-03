import jwt from "jsonwebtoken";

export const jwtDecoratedHelper = (token: string) => {
  const decodedToken = jwt.decode(token);
  if (decodedToken) {
    return decodedToken;
  } else {
    return "";
  }
};
