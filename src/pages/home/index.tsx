import Form from "../../components/Form";
import ReceiptList from "../../components/ReceiptList";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Form />
      <ReceiptList />
    </Container>
  );
};

export default Home;
