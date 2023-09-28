import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  bgImg: string;
}
const Wrapper = ({ children, bgImg }: WrapperProps) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ), url("${bgImg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
