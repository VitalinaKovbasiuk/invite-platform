import { cn } from "@/lib/utils";

const LinkIcon = ({ className }: any) => {
  return (
    <svg
      className={cn(
        className,
        "group-hover:fill-background fill-primary !stroke-none"
      )}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5002 18.25H14.9902C14.5802 18.25 14.2402 17.91 14.2402 17.5C14.2402 17.09 14.5802 16.75 14.9902 16.75H16.5002C19.1202 16.75 21.2502 14.62 21.2502 12C21.2502 9.38 19.1202 7.25 16.5002 7.25H15.0002C14.5902 7.25 14.2502 6.91 14.2502 6.5C14.2502 6.09 14.5802 5.75 15.0002 5.75H16.5002C19.9502 5.75 22.7502 8.55 22.7502 12C22.7502 15.45 19.9502 18.25 16.5002 18.25Z" />
      <path d="M9 18.25H7.5C4.05 18.25 1.25 15.45 1.25 12C1.25 8.55 4.05 5.75 7.5 5.75H9C9.41 5.75 9.75 6.09 9.75 6.5C9.75 6.91 9.41 7.25 9 7.25H7.5C4.88 7.25 2.75 9.38 2.75 12C2.75 14.62 4.88 16.75 7.5 16.75H9C9.41 16.75 9.75 17.09 9.75 17.5C9.75 17.91 9.41 18.25 9 18.25Z" />
      <path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" />
    </svg>
  );
};

export default LinkIcon;
