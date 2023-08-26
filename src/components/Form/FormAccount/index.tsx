import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebaseConfig";
import styles from "./FormAccount.module.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export const FormAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(email, password);

      navigate("details");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (user) {
    return console.log(user);
  }

  return (
    <Form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <fieldset>
        <p>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="João da Silva Bernardo"
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="date">Data de Nascimento</label>
          <input type="date" id="date" required />
        </p>
        <p>
          <label htmlFor="password" id="city-state">
            Cidade / Estado
          </label>
          <input type="text" id="city-state" placeholder="Recife-PE" required />
        </p>
        <p>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="********"
            required
            minLength={8}
          />
        </p>
      </fieldset>

      <fieldset>
        <button className={styles.button_continue}>Continuar</button>

        <Link to="/">
          <button className={styles.button_back}>Já tenho uma conta</button>
        </Link>
      </fieldset>
    </Form>
  );
};
