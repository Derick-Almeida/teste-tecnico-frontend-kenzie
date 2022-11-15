import { ThemeList } from "./style";

const ReceiptList = () => {
  return (
    <ThemeList>
      <h2>VOCÊ RECEBERÁ:</h2>
      <ul>
        <li>
          Amanhã: <span>R$ 0,00</span>
        </li>
        <li>
          Em 15 dias: <span>R$ 0,00</span>
        </li>
        <li>
          Em 30 dias: <span>R$ 0,00</span>
        </li>
        <li>
          Em 90 dias: <span>R$ 0,00</span>
        </li>
      </ul>
    </ThemeList>
  );
};

export default ReceiptList;
