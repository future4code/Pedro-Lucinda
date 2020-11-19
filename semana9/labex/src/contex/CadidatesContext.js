import { createContext, useState } from "react";

export const CadidatesContext = createContext();

export default function CadidatesContextProvider(props) {
  const [candidatesArr, setCandidates] = useState([]);

  return (
    <CadidatesContext.Provider value={{ candidatesArr, setCandidates }}>
      {props.children}
    </CadidatesContext.Provider>
  );
}
