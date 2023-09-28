import DevProject from "@layouts/DevProject";
import Wrapper from "@layouts/Wrapper";
import { thinkRF } from "src/components/constants/dev";

const ThinkRF = () => {
  return (
    <Wrapper bgImg="https://images.unsplash.com/photo-1639369484524-90dce2fac8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80">
      <DevProject project={thinkRF} />
    </Wrapper>
  );
};

export default ThinkRF;
