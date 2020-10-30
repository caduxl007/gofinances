/* eslint-disable react/jsx-one-expression-per-line */
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { Container, Title, Form } from './styles';

import Header from '../../components/Header';
import api from '../../services/api';

const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [preco, setPreco] = useState('');
  const [type, setType] = useState<false | true | null>(null);
  const [category, setCategory] = useState('');

  const navigation = useHistory();
  async function handleAddTransaction(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    let typeValue = '';

    if (type === true) {
      typeValue = 'income';
    } else {
      typeValue = 'outcome';
    }

    await api.post('transactions', {
      title: name,
      value: Number(preco),
      type: typeValue,
      category,
    });

    setName('');
    setPreco('');
    setCategory('');
    navigation.push('/');
  }

  return (
    <>
      <Header pag="register" size="small" />
      <Container>
        <Title>Cadastre uma nova transação!</Title>
        <Form onSubmit={handleAddTransaction}>
          <div className="input-block">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Nome"
            />
          </div>
          <div className="input-block">
            <input
              value={preco}
              onChange={e => setPreco(e.target.value)}
              type="text"
              placeholder="Preço"
            />
          </div>
          <div className="select-button">
            <button
              onClick={() => setType(true)}
              className={type === true ? 'active' : ''}
              type="button"
            >
              <img src={income} alt="Outcome" /> Income
            </button>
            <button
              onClick={() => setType(false)}
              className={type === false ? 'active' : ''}
              type="button"
            >
              <img src={outcome} alt="Outcome" /> Outcome
            </button>
          </div>
          <div className="input-block">
            <input
              value={category}
              onChange={e => setCategory(e.target.value)}
              type="text"
              placeholder="Categoria"
            />
          </div>
          <div className="input-block">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Cadastro;
