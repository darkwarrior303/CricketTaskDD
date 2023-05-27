import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Box, CircularProgress } from "@mui/material";

const CreateTeamPage = lazy(() => import("./pages/CreateTeamPage"))
const CreateMatchPage = lazy(() => import("./pages/CreateMatchPage"))
const CreatePlayerPage = lazy(() => import("./pages/CreatePlayerPage"))

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Header />
          <Suspense fallback={
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <CircularProgress />
            </Box>
          }>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/create-player" element={<CreatePlayerPage />} />
              <Route path="/create-team" element={<CreateTeamPage />} />
              <Route path="/create-match" element={<CreateMatchPage />} />
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;