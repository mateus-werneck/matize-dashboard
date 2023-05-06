import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
`;
export const FormModal = styled.div`
  position: fixed;
  margin: 15%;
  padding: 20px;
  z-index: 1;
  overflow: auto;
  background-color: var(--light-gray);
  border: 1px solid #888;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
