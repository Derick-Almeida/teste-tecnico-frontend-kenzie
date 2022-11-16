import { createContext, ReactNode, useState } from "react";

export interface IProviderProps {
  children: ReactNode;
}

interface IReceiptProviderData {
  receiptData: object;
  setReceiptData: any;
}

export const ContextReceipt = createContext<IReceiptProviderData>({} as IReceiptProviderData);

const ProviderReceipt = ({ children }: IProviderProps) => {
  const [receiptData, setReceiptData] = useState<object>({
    "1": 0,
    "30": 0,
    "60": 0,
    "90": 0,
  });

  return (
    <ContextReceipt.Provider value={{ receiptData, setReceiptData }}>
      {children}
    </ContextReceipt.Provider>
  );
};

export default ProviderReceipt;
