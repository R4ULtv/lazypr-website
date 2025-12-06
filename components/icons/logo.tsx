import * as React from "react";

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="352"
    height="352"
    x="80"
    y="80"
    fill="none"
    alignmentBaseline="middle"
    color="#6BC670"
    viewBox="0 0 16 16"
    {...props}
  >
    <circle
      cx="8"
      cy="8"
      r="6.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    ></circle>
    <path
      fill="currentColor"
      d="M8 4.5c0-.276.225-.503.499-.469A4 4 0 1 1 4.03 8.5c-.033-.275.194-.5.47-.5h3a.5.5 0 0 0 .5-.5z"
    ></path>
  </svg>
);

export default LogoIcon;
