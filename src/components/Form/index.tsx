import { useContext, useState } from "react";
import { ContextReceipt } from "../../contexts/ReceiptsContext";
import { api } from "../../services/api";
import Input from "../Input";
import { ThemeForm } from "./style";

interface IData {
  amount: number;
  installments: number;
  mdr: number;
}

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);

  const { setReceiptData } = useContext(ContextReceipt);

  const sendValues = (e: any) => {
    e.preventDefault();
    const data: IData = { amount, installments, mdr };

    api
      .post("", data)
      .then((res) => setReceiptData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <ThemeForm>
      <form onSubmit={(e) => sendValues(e)}>
        <h1>Simule sua Antecipação</h1>

        <Input
          type="number"
          min="1000"
          label="Informe o valor da venda *"
          placeholder="00,00"
          event={setAmount}
        />
        <Input label="Em quantas parcelas *" msg="Máximo de 12 parcelas" event={setInstallments} />
        <Input
          type="number"
          min="0"
          label="Informe o percentual de MDR *"
          placeholder="0"
          event={setMdr}
        />

        <button type="submit"></button>
      </form>
    </ThemeForm>
  );
};

export default Form;
