export default function Header() {
  return (
    <header className="relative z-50 h-[120px] w-full bg-[#003BE2]">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {/* Logo */}
        <div className="absolute left-[122px] top-[35px] flex items-center">
          <img
            src="/assets/logo/bytespace-logo.svg"
            alt="ByteSpace"
            className="h-[31.5px] w-[28.875px]"
          />

          <span
            className="ml-[8.125px] whitespace-nowrap text-[24px] leading-normal text-[#F5F5F6]"
            style={{
              fontFamily: '"Clash Display", Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            ByteSpace
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start gap-[24px] whitespace-nowrap text-[16px] text-[#F5F5F6]">
          <a
            href="#"
            className="font-medium leading-[1.6]"
            style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
          >
            Home
          </a>

          <a
            href="#courses"
            className="font-normal leading-[1.6]"
            style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
          >
            Courses
          </a>

          <a
            href="#creators"
            className="font-normal leading-[1.6]"
            style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
          >
            Creators
          </a>
        </nav>

        {/* Right Navigation */}
        <div className="absolute right-[120px] top-[48px] flex items-start gap-[24px] text-[16px] text-[#F5F5F6]">
          <a
            href="#"
            className="whitespace-nowrap leading-[24px]"
            style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
          >
            Sign In
          </a>

          <a
            href="#"
            className="whitespace-nowrap leading-[24px]"
            style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
          >
            Join Us
          </a>

          {/* Shopping bag icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6.5 8.5H17.5L18.5 20H5.5L6.5 8.5Z"
              stroke="#F5F5F6"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            <path
              d="M9 9V6.75C9 5.23 10.34 4 12 4C13.66 4 15 5.23 15 6.75V9"
              stroke="#F5F5F6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}