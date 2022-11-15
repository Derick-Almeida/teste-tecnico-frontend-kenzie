import Input from "../Input";
import { ThemeForm } from "./style";

const Form = () => {
  return (
    <ThemeForm>
      <form>
        <h1>Simule sua Antecipação</h1>

        <Input type="number" min="0" label="Informe o valor da venda *" placeholder="00,00" />
        <Input label="Em quantas parcelas *" msg="Máximo de 12 parcelas" />
        <Input type="number" min="0" label="Informe o percentual de MDR *" placeholder="0" />
      </form>
    </ThemeForm>
  );
};

export default Form;
