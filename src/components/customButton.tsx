import styled from "@emotion/styled";

type customButtonProps = {
  onclick?: () => void;
  width?: number;
  children?: any;
};

function customButton({ children, width, onclick }: customButtonProps) {
  const Button = styled.button`
    position: relative;
    width: ${width}px;
    height: 34px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 30px;
    &:active {
      scale: 0.95;
    }
  `;

  const Icon = styled.img``;

  return <Button onClick={onclick}>{children}</Button>;
}

export default customButton;
