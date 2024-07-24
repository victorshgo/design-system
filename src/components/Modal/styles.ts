import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

/* Theme */
import { theme } from '../../theme';

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Modal = styled.div<{ width?: string | number }>`
  width: ${(props) => (props.width ? props.width : '50%')};
  min-height: 10rem;
  padding: 2rem;
  position: fixed;
  top: 20vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border-radius: ${theme.space.spacing8};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
`;

export const ModalHeader = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(170, 170, 170, 0.3);
`;

export const CloseIcon = styled(FaTimes)`
  color: ${theme.colors.lightGray};
  cursor: pointer;

  :hover {
    color: ${theme.colors.gray};
  }
`;
