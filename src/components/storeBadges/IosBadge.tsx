/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { jsx } from "theme-ui";
import * as React from "react";
import SvgIosBadge from "icons/IosBadge";

const IosBadge = (props: React.ComponentProps<"a">) => {
  return (
    <a
      rel="noopener noreferrer"
      target="__blank"
      href="https://apps.apple.com/us/app/the-palace-project/id1574359693"
      aria-label="Download Palace on the Apple App Store"
      sx={{ display: "block" }}
      {...props}
    >
      <SvgIosBadge />
    </a>
  );
};
export default IosBadge;
