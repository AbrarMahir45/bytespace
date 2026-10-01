import LearningProgressCard from "./LearningProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";

export default function Hero() {
  return (
    <section className="relative h-[904px] w-full overflow-hidden bg-[#003BE2]">
      {/* =====================================================
          FIGMA CANVAS
          Figma Hero Frame = 1440 × 1024
          Header = 120px
          Hero component = 904px
      ===================================================== */}

      <div className="absolute left-1/2 top-0 h-[904px] w-[1440px] -translate-x-1/2">
        {/* =====================================================
            DECORATIVE SHAPES
        ===================================================== */}

        {/* LEFT GREEN SHAPE */}
        <div
          className="absolute z-0"
          style={{
            left: "-200px",
            top: "101px",
            width: "385px",
            height: "385px",
          }}
        >
          <img
            src="/assets/hero/hero-green-shape.svg"
            alt=""
            className="block h-full w-full"
          />
        </div>

        {/* RIGHT GREEN/YELLOW SHAPE */}
        <div
          className="absolute z-0"
          style={{
            right: "-200px",
            top: "101px",
            width: "370px",
            height: "370px",
          }}
        >
          <img
            src="/assets/hero/other-shapes/hero-yellow-shape.svg"
            alt=""
            className="block h-full w-full"
          />
        </div>

        {/* RIGHT TRIANGLE */}
        <div
          className="absolute z-10"
          style={{
            left: "1106px",
            top: "344px",
            width: "188px",
            height: "188px",
          }}
        >
          <img
            src="/assets/hero/other-shapes/hero-triangle.svg"
            alt=""
            className="block h-full w-full"
          />
        </div>

        {/* LEFT WHITE SQUIGGLE */}
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            left: "183px",
            top: "357px",
            width: "175px",
            height: "175px",
            transform: "rotate(360deg)",
          }}
        >
          <img
            src="/assets/hero/other-shapes/hero-white-squiggle-left.svg"
            alt=""
            className="block h-full w-full object-contain"
          />
        </div>

        {/* LOWER LEFT WHITE RING */}
        <div
          className="absolute z-10"
          style={{
            left: "18px",
            top: "562px",
            width: "342px",
            height: "342px",
          }}
        >
          <img
            src="/assets/hero/other-shapes/hero-white-ring.svg"
            alt=""
            className="block h-full w-full object-contain"
          />
        </div>

        {/* BOTTOM RIGHT WHITE SQUIGGLE */}
        <div
          className="absolute z-10"
          style={{
            left: "1127px",
            top: "552px",
            width: "330px",
            height: "330px",
          }}
        >
          <img
            src="/assets/hero/other-shapes/hero-white-squiggle-right.svg"
            alt=""
            className="block h-full w-full object-contain"
          />
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <h1 className="absolute left-1/2 top-[49px] z-20 w-[935px] -translate-x-1/2 text-center font-[Poppins] text-[72px] font-semibold leading-[120%] tracking-[-0.72px] text-white">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p
          className="absolute left-1/2 top-[281px] z-20 w-[819px] -translate-x-1/2 whitespace-nowrap text-center text-[18px] leading-[160%] text-[#E5E6E8]"
          style={{
            fontFamily: '"Satoshi", Arial, sans-serif',
          }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* Search */}
        <div
          className="absolute left-1/2 top-[370px] z-20 flex -translate-x-1/2 items-center gap-[16px]"
          style={{
            fontFamily: '"Satoshi", Arial, sans-serif',
          }}
        >
          <div className="flex h-[52px] w-[461px] items-center gap-[8px] rounded-[24px] bg-white px-[24px] py-[12px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="#82868E"
                strokeWidth="1.8"
              />

              <path
                d="M16 16L20 20"
                stroke="#82868E"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Course, topic, creator"
              className="h-full min-w-0 flex-1 bg-transparent text-[18px] text-[#242528] outline-none placeholder:text-[#82868E]"
            />
          </div>

          <button
            type="button"
            className="h-[52px] rounded-[24px] bg-[#D4FB20] px-[24px] text-[18px] font-medium text-[#242528] transition-opacity hover:opacity-90"
          >
            Search
          </button>
        </div>

        {/* LARGE GREEN CIRCLE */}
        <div
          className="absolute z-[1] rounded-full border-[320px] border-[#CBFC01]"
          style={{
            left: "145px",
            top: "462px",
            width: "1149px",
            height: "1149px",
          }}
        />

        {/* HERO PERSON */}
        <img
          src="/assets/hero/hero-person.png"
          alt="Student"
          className="absolute z-10 object-contain"
          style={{
            left: "440px",
            top: "425px",
            width: "578px",
            height: "541px",
          }}
        />

        {/* UI / UX CARD */}
        <div
          className="absolute z-30 rounded-[16px] bg-white p-[16px]"
          style={{
            left: "404px",
            top: "519px",
            width: "208px",
            height: "70px",
          }}
        >
          <p
            className="text-[16px] font-medium leading-[120%] text-[#242528]"
            style={{
              fontFamily: '"Satoshi", Arial, sans-serif',
            }}
          >
            UI/UX Design
          </p>

          <p
            className="mt-[4px] whitespace-nowrap text-[12px] leading-[120%] text-[#82868E]"
            style={{
              fontFamily: '"Satoshi", Arial, sans-serif',
            }}
          >
            200 Courses • 1000+ Students
          </p>
        </div>

        {/* Learning Progress */}
       <div className="absolute z-40" style={{ left: "842px", top: "531px" }}>
        <LearningProgressCard />
      </div>

        {/* Happy Students */}
        <div className="absolute z-40" style={{ left: "328px", top: "717px" }}>
         <HappyStudentsCard />
       </div>
      </div>
    </section>
  );
}