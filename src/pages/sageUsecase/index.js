import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getUser } from "../../store/user/user-slice";

import Header from "../../components/Header";

function SagaUsecaseApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Header />
      <h1 style={{ color: "black" }}>Hi {user?.id}</h1>
      <h1 style={{ color: "black" }}>Hi {user?.name}</h1>
    </div>
  );
}

export default SagaUsecaseApp;
