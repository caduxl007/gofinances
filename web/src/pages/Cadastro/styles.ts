import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 2%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const Form = styled.form`
  margin: 50px auto 0 auto;
  width: 70%;
  padding: 30px;
  background-color: white;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div.input-block {
    width: 100%;
    max-width: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    & + .input-block {
      margin-top: 10px;
    }

    input {
      width: 100%;
      height: 50px;
      padding-left: 8px;

      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    button {
      margin-top: 20px;
      display: block;
      width: 500px;
      height: 50px;

      border: 0;
      background: #ff872c;
      border-radius: 5px;

      color: white;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#ff872c')};
      }
    }
  }

  div.select-button {
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    button {
      display: block;
      width: 150px;
      height: 50px;

      border: 0;
      border: 1.5px solid #969cb3;
      border-radius: 5px;

      font-size: 16px;
      line-height: 21px;
      color: #363f5f;

      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        border-color: green;
      }

      img {
        padding-right: 5px;
      }
    }
  }
`;
