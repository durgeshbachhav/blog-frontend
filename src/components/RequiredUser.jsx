import React from "react";
import { KEY_ACCESS_TOKEN, getItem } from "../utility/LocalStorageManager";
import { Navigate, Outlet } from "react-router-dom";

const RequiredUser = () => {
  const user = getItem(KEY_ACCESS_TOKEN);
  return <div>{user ? <Outlet /> : <Navigate to={`/login`} />}</div>;
};

export default RequiredUser;
