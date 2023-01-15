import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import {ReactNode} from "react";

type childrenPropsType = {
    children: ReactNode
}

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const CustomAnimation: React.FC<childrenPropsType> = ({ children }) => {
    return <Reveal keyframes={customAnimation}>{children}</Reveal>;
}