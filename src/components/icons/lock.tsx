import * as React from "react"
import { SVGProps } from "react"
const Lock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M6 10V7a6 6 0 1 1 12 0v3h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1Zm3.172-5.828A4 4 0 0 1 16 7v3H8V7a4 4 0 0 1 1.172-2.828ZM5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Lock
