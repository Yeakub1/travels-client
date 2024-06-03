"use client";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("accessToken", accessToken);
  }
};


export const getUserInfo = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};


export const removeFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
  }
};


export const isLoggedIn = () => {
  const authToken = getUserInfo();
  return !!authToken;
};
