import * as React from "react";
import { SVGProps } from "react";
const Image = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      d="M8 10a2 2 0 1 1 .001-4.001A2 2 0 0 1 8 10Zm0-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm22 13.128L24 11l-9.941 10.111L10 17l-8 7.337V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v13.128ZM30 28a2 2 0 0 1-2 2h-5.168l-7.368-7.465L24 13.999l6 6V28ZM4 30a2 2 0 0 1-2-2v-.939l7.945-7.116L20.001 30H4ZM28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
    />
  </svg>
);
export default Image;
