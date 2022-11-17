import { useContext, useState } from "react";
import { ContextReceipt } from "../../contexts/ReceiptsContext";
import { api } from "../../services/api";
import Input from "../Input";
import { ThemeForm } from "./style";
import validateFields from "./validator";

interface IErrors {
  amount?: string;
  installments?: string;
  mdr?: string;
}

const Form = () => {
  const [amount, setAmount] = useState<number>();
  const [installments, setInstallments] = useState<number>();
  const [mdr, setMdr] = useState<number>();
  const [errors, setErrors] = useState<IErrors>({});

  const { setReceiptData, setShowError } = useContext(ContextReceipt);

  const sendValues = (e: any) => {
    e.preventDefault();

    const data = { amount, installments, mdr };
    const validated = validateFields(data);

    if (Object.keys(validated).length !== 0) {
      setErrors(validated);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2500);
    } else {
      api
        .post("", data)
        .then((res) => {
          setShowError(false);
          setReceiptData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ThemeForm>
      <form onSubmit={(e) => sendValues(e)}>
        <h1>Simule sua Antecipação</h1>

        <Input
          type="number"
          name="amount"
          label="Informe o valor da venda *"
          placeholder="00,00"
          error={errors?.amount ? errors.amount : false}
          event={setAmount}
        />
        <Input
          type="number"
          name="installments"
          label="Em quantas parcelas *"
          msg="Máximo de 12 parcelas"
          placeholder="1"
          error={errors?.installments ? errors.installments : false}
          event={setInstallments}
        />
        <Input
          type="number"
          name="mdr"
          label="Informe o percentual de MDR *"
          placeholder="0"
          error={errors?.mdr ? errors.mdr : false}
          event={setMdr}
        />

        <button type="submit">Calcular</button>
      </form>
    </ThemeForm>
  );
};

export default Form;
