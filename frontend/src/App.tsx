import React, { useEffect, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from "./features/games/GamesPage";
import { useAppDispatch } from "./store/store";
import { getGames } from "./features/games/gameSlice";
import NavBar from "./components/NavBar";
import SingleGamePage from "./features/games/SingleGamePage";
import CreateGamePage from "./features/games/CreateGamePage";
import EditGamePage from "./features/games/EditGamePage";

function App() {
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [initApp]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GamesPage />} />
        <Route path="/game/:id" element={<SingleGamePage />} />
        <Route path="/editGame/:id" element={<EditGamePage />} />
        <Route path="/createGame" element={<CreateGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
