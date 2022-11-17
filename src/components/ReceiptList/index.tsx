import { useContext } from "react";
import { ContextReceipt } from "../../contexts/ReceiptsContext";
import { ThemeList } from "./style";

const ReceiptList = () => {
  const { receiptData } = useContext(ContextReceipt);

  return (
    <ThemeList>
      <h2>VOCÊ RECEBERÁ:</h2>
      <ul>
        {Object.entries(receiptData)?.map((receipt, index) => (
          <li key={index}>
            {receipt[0] === "1" ? "Amanhã: " : `Em ${receipt[0]} dias: `}
            <span>
              {receipt[1].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </span>
          </li>
        ))}
      </ul>
    </ThemeList>
  );
};

export default ReceiptList;
