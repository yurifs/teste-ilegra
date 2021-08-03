import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  h2 {
    color: #fff;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  > div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
