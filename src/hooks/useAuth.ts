import { useMessage } from "./useMessage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useAuth = () => {
  const { showMessage } = useMessage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "login success!", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "can't find user", status: "error" });
          }
        })
        .catch(() => {
          showMessage({ title: "can't login", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [navigate, showMessage]
  );
  return { login, loading };
};
