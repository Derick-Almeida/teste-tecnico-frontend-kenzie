import { createContext, ReactNode, useState } from "react";

export interface IProviderProps {
  children: ReactNode;
}

interface IReceiptProviderData {
  receiptData: object;
  setReceiptData: any;
  showError: boolean;
  setShowError: any;
}

export const ContextReceipt = createContext<IReceiptProviderData>({} as IReceiptProviderData);

const ProviderReceipt = ({ children }: IProviderProps) => {
  const [receiptData, setReceiptData] = useState<object>({
    "1": 0,
    "30": 0,
    "60": 0,
    "90": 0,
  });
  const [showError, setShowError] = useState(false);

  return (
    <ContextReceipt.Provider value={{ receiptData, setReceiptData, showError, setShowError }}>
      {children}
    </ContextReceipt.Provider>
  );
};

export default ProviderReceipt;
