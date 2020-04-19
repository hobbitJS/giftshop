import React from "react";

import { LoadingOverlayContainer } from "./loading-overlay.styles";
import Spinner from "../spinner/spinner.component";

const LoadingOverlay = () => (
  <LoadingOverlayContainer>
    <Spinner />
  </LoadingOverlayContainer>
);

export default LoadingOverlay;
