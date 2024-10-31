"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ContextType = { value: any };

const DataInfoContext = createContext<ContextType>({} as ContextType);

export const useDataInfo = () => {
  return useContext(DataInfoContext);
};

const DataInfoProvider = ({ children }: Props) => {
  const [dataInfo, setDataInfo] = useState({});

  return (
    <DataInfoContext.Provider value={{ value: dataInfo }}>
      {children}
    </DataInfoContext.Provider>
  );
};
export default DataInfoProvider;
