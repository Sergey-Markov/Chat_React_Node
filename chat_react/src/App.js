import { MessagesList } from "./Components/MessagesList/index";
import { SendMessageForm } from "./Components/SendMessageForm";
import { Title } from "./Components/Title/index";

function App() {
  return (
    <div className="App">
      <Title />
      <MessagesList />
      <SendMessageForm />
    </div>
  );
}

export default App;
