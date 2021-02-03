import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToPage } from '../Routes/Coordinator'

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToPage(history, "/");
    }
  }, [history]);
};
