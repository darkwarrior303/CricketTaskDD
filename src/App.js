import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import AppContextProvider from "./context/AppContext";
import CreateTeamPage from "./pages/CreateTeamPage";
import CreateMatchPage from "./pages/CreateMatchPage";
import HomePage from "./pages/HomePage";
import CreatePlayerPage from "./pages/CreatePlayerPage";
import Header from "./components/Header";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/create-player" element={<CreatePlayerPage />} />
              <Route path="/create-team" element={<CreateTeamPage />} />
              <Route path="/create-match" element={<CreateMatchPage />} />
            </Routes>
          </Router>
        </AppContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;