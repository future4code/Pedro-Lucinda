import React, { createContext, useState } from "react";

export const ApplyIdContext = createContext();

export default function ApplyIdContextProvider(props) {
  const [applyId, setApplyId] = useState("");

  return (
    <ApplyIdContext.Provider value={{ applyId, setApplyId }}>
      {props.children}
    </ApplyIdContext.Provider>
  );
}
