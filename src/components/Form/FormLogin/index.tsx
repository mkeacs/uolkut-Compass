import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebaseConfig";
import styles from "./FormLogin.module.css";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);

      navigate("profile");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    console.log("Usuário logado:", user);
  }

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formLoginContainer}>
      <fieldset>
        <p>
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p className={styles.checkboxContainer}>
          <input type="checkbox" name="remember-password" />
          <label htmlFor="remember-password">Lembrar minha senha</label>
        </p>
      </fieldset>

      <fieldset>
        <button type="submit" className={styles.button_login}>
          Entrar na conta
        </button>

        <Link to="/register">
          <button className={styles.button_register}>Criar uma conta</button>
        </Link>

        <a href="#">Esqueci a minha senha</a>
      </fieldset>
    </Form>
  );
};
