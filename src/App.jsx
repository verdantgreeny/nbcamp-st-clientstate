import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import { Provider } from "react-redux";
import {store} from "./redux/store"

// prop drilling 브랜치
function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - Prop Drilling 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </Provider>
  );
}

export default App;
