import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyle from "./global/styles/global";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import { store } from "./redux/store";
import theme from "./global/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <AppRoutes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
