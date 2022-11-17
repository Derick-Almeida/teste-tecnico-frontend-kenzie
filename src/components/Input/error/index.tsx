import { Container } from "./style";

interface IErrorProps {
  msg: string;
}

const Error = ({ msg }: IErrorProps) => {
  return (
    <Container>
      <span>!</span>
      <p>{msg}</p>
    </Container>
  );
};

export default Error;
