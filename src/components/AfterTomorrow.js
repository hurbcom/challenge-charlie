import { Tomorrow } from "components/Tomorrow";
import { withHocs, withProp } from "react-new-hoc";

export const AfterTomorrow = withHocs(
  withProp("className", "after-tomorrow"),
  withProp("title", "DEPOIS DE AMANHÃ")
)(Tomorrow);
