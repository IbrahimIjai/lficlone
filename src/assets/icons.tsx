import { SVGProps } from "react";
const XLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#919AA7"
      d="M.049 0 7.77 10.48 0 19h1.749l6.803-7.46L14.049 19H20L11.844 7.93 19.076 0h-1.748l-6.266 6.87L6 0H.05ZM2.62 1.308h2.734l12.073 16.384h-2.734L2.62 1.308Z"
    />
  </svg>
);

const TelegramLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
    width="32px"
    height="32px"
    viewBox="0 0 32 32" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z" />
  </svg>
  );
export { XLogo, TelegramLogo };
