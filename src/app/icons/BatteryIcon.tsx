import { cn } from "@/lib/utils";

const BatteryIcon = ({ className }: any) => {
  return (
    <svg
      width="24"
      height="11"
      viewBox="0 0 25 12"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-white"
    >
      <path
        opacity="0.35"
        d="M0.5 3.00065C0.5 1.80403 1.47005 0.833984 2.66667 0.833984H19.3333C20.53 0.833984 21.5 1.80403 21.5 3.00065V9.00065C21.5 10.1973 20.53 11.1673 19.3333 11.1673H2.66667C1.47005 11.1673 0.5 10.1973 0.5 9.00065V3.00065Z"
        className="stroke-black"
      />
      <path
        opacity="0.4"
        d="M23 4.00098V8.00098C23.8047 7.6622 24.328 6.87411 24.328 6.00098C24.328 5.12784 23.8047 4.33975 23 4.00098Z"
        className="!fill-black"
      />
      <path
        d="M2 3.43399C2 2.82647 2.49249 2.33398 3.1 2.33398H18.9C19.5075 2.33398 20 2.82647 20 3.43398V8.56732C20 9.17483 19.5075 9.66732 18.9 9.66732H3.1C2.49249 9.66732 2 9.17483 2 8.56732V3.43399Z"
        className="!fill-black "
      />
    </svg>
  );
};

export default BatteryIcon;
