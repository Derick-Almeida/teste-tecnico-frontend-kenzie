import Input from "../Input";
import { ThemeForm } from "./style";

const Form = () => {
  return (
    <ThemeForm>
      <form>
        <h1>Simule sua Antecipação</h1>

        <Input label="Informe o valor da venda *" />
        <Input label="Em quantas parcelas *" msg="Máximo de 12 parcelas" />
        <Input label="Informe o percentual de MDR *" />
      </form>
    </ThemeForm>
  );
};

export default Form;
