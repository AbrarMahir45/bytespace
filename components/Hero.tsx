export default function Hero() {
  return (
    <section className="relative h-[904px] w-full overflow-hidden bg-[#003BE2]">
      {/* =====================================================
          FIGMA CANVAS
          Figma Hero Frame = 1440 × 1024
          Header = 120px
          Hero component = 904px
          
          All Figma X/Y positions are calculated inside
          this 1440px canvas.
      ===================================================== */}

      <div className="absolute left-1/2 top-0 h-[904px] w-[1440px] -translate-x-1/2">
        {/* =====================================================
            DECORATIVE SHAPES
        ===================================================== */}

        {/* LEFT GREEN SHAPE
            Figma:
            X: -118
            Y: 221
            W: 385
            H: 385
        */}
        <div
          className="absolute z-0"
          style={{
            left: "-118px",
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

        {/* RIGHT GREEN/YELLOW SHAPE
            Figma:
            X: 1231
            Y: 221
            W: 370
            H: 370
        */}
        <div
          className="absolute z-0"
          style={{
            left: "1215px",
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

        {/* RIGHT TRIANGLE
            Figma:
            X: 1106
            Y: 464
            W: 188
            H: 188
        */}
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

        {/* LEFT WHITE SQUIGGLE
            Figma:
            X: 183
            Y: 477
            W: 175
            H: 175
            Rotation: 180°
        */}
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

        {/* LOWER LEFT WHITE RING
            Figma:
            X: 18
            Y: 682
            W: 342
            H: 342
        */}
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

        {/* BOTTOM RIGHT WHITE SQUIGGLE
            Figma:
            X: 1127
            Y: 672
            W: 330
            H: 330
        */}
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

        {/* Heading
            Figma:
            Width: 935px
            Height: 172px
            Font: Poppins
            Size: 72px
            Weight: 600
            Line height: 120%
        */}
        <h1 className="absolute left-1/2 top-[49px] z-20 w-[935px] -translate-x-1/2 text-center font-[Poppins] text-[72px] font-semibold leading-[120%] tracking-[-0.72px] text-white">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Description
            Figma:
            Width: 819px
            Height: 29px
            Size: 18px
        */}
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
  {/* Search input */}
  <div className="flex h-[52px] w-[461px] items-center gap-[8px] rounded-[24px] bg-white px-[24px] py-[12px]">
    {/* Search icon */}
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

    {/* Actual input */}
    <input
      type="text"
      placeholder="Course, topic, creator"
      className="h-full min-w-0 flex-1 bg-transparent text-[18px] text-[#242528] outline-none placeholder:text-[#82868E]"
    />
  </div>

  {/* Search button */}
  <button
    type="button"
    className="h-[52px] rounded-[24px] bg-[#D4FB20] px-[24px] text-[18px] font-medium text-[#242528] transition-opacity hover:opacity-90"
  >
    Search
  </button>
</div>

        {/* =====================================================
            LARGE GREEN CIRCLE
            Figma:
            X: 145
            Y: 582
            W: 1149
            H: 1149
            Border: 320px
        ===================================================== */}

        <div
          className="absolute z-[1] rounded-full border-[320px] border-[#CBFC01]"
          style={{
            left: "145px",
            top: "462px",
            width: "1149px",
            height: "1149px",
          }}
        />

        {/* =====================================================
            HERO PERSON
            Figma:
            X: approximately 431
            Y: 512
            W: 578
            H: 541
        ===================================================== */}

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

        {/* =====================================================
            UI / UX CARD
            Figma:
            X: 404
            Y: 639
            W: 208
            H: 70
        ===================================================== */}

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

        {/* =====================================================
            LEARNING PROGRESS
            Figma:
            X: 842
            Y: 651
            W: 232
            H: 131
        ===================================================== */}

        <div
          className="absolute z-30 rounded-[16px] bg-white p-[16px]"
          style={{
            left: "842px",
            top: "531px",
            width: "232px",
            height: "131px",
          }}
        >
          <p
            className="text-[14px] font-medium leading-[120%] text-[#242528]"
            style={{
              fontFamily: '"Satoshi", Arial, sans-serif',
            }}
          >
            Learning Progress
          </p>

          <p className="mt-[4px] font-[Poppins] text-[48px] font-semibold leading-[120%] tracking-[-0.48px] text-[#242528]">
            55%
          </p>

          <div className="mt-[6px] h-[8px] w-[200px] rounded-full bg-[#F6F6F6]">
            <div className="h-[8px] w-[112px] rounded-full bg-[#D4FB20]" />
          </div>
        </div>

        {/* =====================================================
            HAPPY STUDENTS
            Figma:
            X: 328
            Y: 837
            W: 258
            H: 121
        ===================================================== */}

        <div
          className="absolute z-30 rounded-[16px] bg-white p-[16px]"
          style={{
            left: "328px",
            top: "717px",
            width: "258px",
            height: "121px",
          }}
        >
          <p
            className="text-[16px] font-medium leading-[120%] text-[#242528]"
            style={{
              fontFamily: '"Satoshi", Arial, sans-serif',
            }}
          >
            Happy Students
          </p>

          <div className="mt-[4px] flex items-center gap-[5px]">
            <span className="text-[16px] text-[#D4FB20]">★</span>

            <span
              className="text-[12px] text-[#242528]"
              style={{
                fontFamily: '"Satoshi", Arial, sans-serif',
              }}
            >
              4.5 (240)
            </span>
          </div>

          <div className="mt-[8px] flex items-center">
            {[
              "happy-student-01.png",
              "happy-student-02.png",
              "happy-student-03.png",
              "happy-student-04.png",
              "happy-student-05.png",
              "happy-student-06.png",
              "happy-student-07.png",
            ].map((avatar, index) => (
              <img
                key={avatar}
                src={`/assets/avatars/${avatar}`}
                alt=""
                className={`h-[43px] w-[43px] rounded-full border-2 border-white object-cover ${
                  index !== 0 ? "-ml-[16px]" : ""
                }`}
              />
            ))}

            <div className="-ml-[16px] flex h-[43px] w-[43px] items-center justify-center rounded-full border-2 border-white bg-[#D4FB20]">
              <span className="text-[11px] font-semibold text-[#242528]">
                2K+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}