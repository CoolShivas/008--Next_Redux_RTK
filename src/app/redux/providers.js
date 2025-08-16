import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({}) {
  return <Provider store={store}></Provider>;
}
