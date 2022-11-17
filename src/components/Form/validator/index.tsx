interface IData {
  amount: number | undefined;
  installments: number | undefined;
  mdr: number | undefined;
}

interface IErrors {
  amount?: string;
  installments?: string;
  mdr?: string;
}

const validateFields = (data: IData) => {
  const { amount, installments, mdr } = data;
  const errors: IErrors = {};

  if (amount === undefined) {
    errors["amount"] = "Campo obrigatório.";
  } else {
    if (typeof amount === "string" && amount === "") {
      errors["amount"] = "Campo obrigatório.";
    } else {
      if (amount < 1000) {
        errors["amount"] = "O valor da venda deve ser maior ou igual a 1000.";
      }
      if (amount > 100000000) {
        errors["amount"] = "O valor da venda deve ser menor ou igual a 100000000.";
      }
    }
  }

  if (installments === undefined) {
    errors["installments"] = "Campo obrigatório.";
  } else {
    if (typeof installments === "string" && installments === "") {
      errors["installments"] = "Campo obrigatório.";
    } else {
      if (installments < 1) {
        errors["installments"] = "O número de parcelas deve ser maior ou igual a 1.";
      }
      if (installments > 12) {
        errors["installments"] = "O número de parcelas deve ser menor ou igual a 12.";
      }
    }
  }

  if (mdr === undefined) {
    errors["mdr"] = "Campo obrigatório.";
  } else {
    if (typeof mdr === "string" && mdr === "") {
      errors["mdr"] = "Campo obrigatório.";
    } else {
      if (mdr < 0) {
        errors["mdr"] = "O percentual deve ser maior ou igual a 0.";
      }
      if (mdr > 100) {
        errors["mdr"] = "O percentual deve ser menor ou igual a 100.";
      }
    }
  }

  return errors;
};

export default validateFields;
