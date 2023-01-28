import React, { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
const ResetPassword = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div>
      ResetPassword {currentColor} {currentMode}
    </div>
  );
};

export default ResetPassword;
