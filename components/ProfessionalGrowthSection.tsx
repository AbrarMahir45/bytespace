import LearningProgressCard from "./LearningProgressCard";
import HappyStudentsCard from "./HappyStudentsCard";

export default function ProfessionalGrowthSection() {
  return (
    <section className="relative min-h-[1460px] w-full overflow-hidden bg-[#FBFDF0]">

      {/* 
          BACKGROUND RADIAL ELLIPSES
     */}

      {/* EllipseUpper-right green/lime glow
      */}
      <div
        className="pointer-events-none absolute -top-[458px] right-[-508px] h-[1137px] w-[1137px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212, 251, 32, 0.42) 0%, rgba(212, 251, 32, 0.20) 28%, rgba(212, 251, 32, 0) 68%)",
          filter: "blur(55px)",
        }}
      />

      {/* Ellipse Left-side green + blue transition
      */}
      <div
        className="pointer-events-none absolute left-[-508px] top-[183px] h-[1137px] w-[1137px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212, 251, 32, 0.16) 0%, rgba(212, 251, 32, 0.08) 30%, rgba(0, 59, 226, 0.08) 58%, rgba(0, 59, 226, 0) 72%)",
          filter: "blur(55px)",
        }}
      />

      {/* Ellipse Lower-left blue/lavender glow
      */}
      <div
        className="pointer-events-none absolute bottom-[-158px] left-[-287px] h-[672px] w-[672px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 59, 226, 0.20) 0%, rgba(92, 116, 255, 0.12) 35%, rgba(0, 59, 226, 0) 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Ellipse Lower-right soft blue glow
      */}
      <div
        className="pointer-events-none absolute bottom-[-465px] right-[-419px] h-[1137px] w-[1137px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 59, 226, 0.10) 0%, rgba(101, 123, 255, 0.06) 35%, rgba(0, 59, 226, 0) 72%)",
          filter: "blur(60px)",
        }}
      />

      {/* Ellipse Upper-left soft green glow
      */}
      <div
        className="pointer-events-none absolute -left-[152px] -top-[466px] h-[1137px] w-[1137px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(212, 251, 32, 0.18) 0%, rgba(212, 251, 32, 0.08) 32%, rgba(212, 251, 32, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* 
          MAIN CONTENT
      */}

      <div className="relative z-10 mx-auto flex w-[1258px] flex-col  pt-[120px]">

        {/* 
            TOP SECTION
        */}

        <div className="flex h-[404px] w-full items-center justify-between">

          {/* LEFT CONTENT */}

          <div className="w-[574px]">

            <h2
              className="w-[574px] text-[36px] font-medium leading-[44px] tracking-[-0.36px] text-[#040819]"
              style={{
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p
              className="mt-[40px] w-[574px] text-[16px] leading-[160%] text-[#82868E]"
              style={{
                fontFamily: '"Satoshi", Arial, sans-serif',
              }}
            >
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>

            {/* STATS */}

            <div className="mt-[40px] flex items-center gap-[56px]">

              {/* Students */}

              <div>
                <p
                  className="text-[28px] font-semibold leading-[120%] text-[#0057FF]"
                  style={{
                    fontFamily: "Poppins, Arial, sans-serif",
                  }}
                >
                  12K
                </p>

                <p
                  className="mt-[4px] text-[14px] text-[#82868E]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  Students
                </p>
              </div>

              {/* Courses */}

              <div>
                <p
                  className="text-[28px] font-semibold leading-[120%] text-[#0057FF]"
                  style={{
                    fontFamily: "Poppins, Arial, sans-serif",
                  }}
                >
                  70+
                </p>

                <p
                  className="mt-[4px] text-[14px] text-[#82868E]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  Courses
                </p>
              </div>

              {/* Creators */}

              <div>
                <p
                  className="text-[28px] font-semibold leading-[120%] text-[#0057FF]"
                  style={{
                    fontFamily: "Poppins, Arial, sans-serif",
                  }}
                >
                  16
                </p>

                <p
                  className="mt-[4px] text-[14px] text-[#82868E]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  Creators
                </p>
              </div>

            </div>
          </div>


          {/* 
              TOP RIGHT VISUAL
         */}

          <div className="relative h-[404px] w-[574px]">

            {/* COURSE CARD IMAGE */}

            <img
              src="/assets/hero/Course_Card_1.png"
              alt="Course preview"
              className="absolute left-[18px] top-[0px] z-20 h-[266px] w-[256px] object-contain"
            />


            {/* GREEN SQUIGGLE */}

            <img
              src="/assets/hero/other-shapes/hero-white-squiggle-right.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-[470px] top-[55px] z-50 h-[150px] w-[115px] object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(85%) sepia(98%) saturate(1400%) hue-rotate(18deg) brightness(105%) contrast(105%)",
              }}
            />


            {/* HERO PERSON */}

            <img
              src="/assets/hero/hero-person.png"
              alt="Professional learner"
              className="absolute bottom-[-40px] left-[105px] z-30 h-[430px] w-[460px] object-contain"
            />


            {/* LEARNING PROGRESS */}

            <div className="absolute right-[0px] top-[147px] z-40">
              <LearningProgressCard />
            </div>

          </div>
        </div>


        {/* 
            LOWER SECTION
        */}

        <div className="flex h-[744px] w-full items-center justify-between">

          {/* 
              LEFT VISUAL
          */}

          <div className="relative h-[650px] w-[574px]">

            {/* TOTAL REVENUE CARD */}

            <div className="absolute left-[0px] top-[70px] z-30">

              <div className="relative h-[119px] w-[232px] rounded-[16px] bg-[#003BE2] p-[16px]">

                <p
                  className="text-[14px] font-medium text-white"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  Total Revenue
                </p>

                <p
                  className="mt-[2px] text-[10px] text-[#E5E6E8]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  July 1-28
                </p>

                <p
                  className="mt-[5px] text-[28px] font-semibold leading-[120%] text-white"
                  style={{
                    fontFamily: "Poppins, Arial, sans-serif",
                  }}
                >
                  $120.29
                </p>

                <div className="absolute bottom-[14px] left-[16px] h-[6px] w-[200px] rounded-full bg-white/20">
                  <div className="h-[6px] w-[125px] rounded-full bg-[#D4FB20]" />
                </div>

              </div>
            </div>


            {/* YEAR TO DATE CARD */}

            <div className="absolute left-[0px] top-[205px] z-30">

              <div className="relative h-[135px] w-[134px] rounded-[16px] bg-[#003BE2] p-[16px]">

                <p
                  className="text-[14px] font-medium leading-[120%] text-white"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  Year to Date
                </p>

                <p
                  className="mt-[4px] text-[10px] text-[#E5E6E8]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  2023
                </p>

                <p
                  className="mt-[4px] whitespace-nowrap text-[19px] font-semibold leading-[120%] text-white"
                  style={{
                    fontFamily: "Poppins, Arial, sans-serif",
                  }}
                >
                  $1,200.38
                </p>

                {/* +12$ */}

                <div
                  className="absolute bottom-[10px] right-[10px] flex h-[24px] items-center justify-center rounded-full bg-[#D4FB20] px-[9px] text-[10px] font-medium text-[#242528]"
                  style={{
                    fontFamily: '"Satoshi", Arial, sans-serif',
                  }}
                >
                  +12$
                </div>

              </div>
            </div>


            {/* LOWER GREEN SQUIGGLE */}

            <img
              src="/assets/hero/other-shapes/hero-white-squiggle-left.svg"
              alt=""
              aria-hidden="true"
              className="absolute left-[360px] top-[220px] z-10 h-[125px] w-[105px] object-contain"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(85%) sepia(98%) saturate(1400%) hue-rotate(18deg) brightness(105%) contrast(105%)",
              }}
            />


            {/* PROFESSIONAL PERSON */}

            <img
              src="/assets/hero/profession-person.png"
              alt="Course creator"
              className="absolute bottom-0 left-[70px] z-20 h-[500px] w-[500px] object-contain"
            />


            {/* HAPPY STUDENTS */}

            <div className="absolute bottom-[40px] left-[350px] z-40">
              <HappyStudentsCard />
            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="w-[574px]">

            <h2
              className="w-[574px] text-[36px] font-medium leading-[44px] tracking-[-0.36px] text-[#040819]"
              style={{
                fontFamily: "Poppins, Arial, sans-serif",
              }}
            >
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p
              className="mt-[40px] w-[540px] text-[16px] leading-[160%] text-[#82868E]"
              style={{
                fontFamily: '"Satoshi", Arial, sans-serif',
              }}
            >
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>


            {/* CHECKLIST */}

            <div
              className="mt-[40px] flex flex-col gap-[20px]"
              style={{
                fontFamily: '"Satoshi", Arial, sans-serif',
              }}
            >

              {/* Share Your Expertise */}

              <div className="flex items-center gap-[12px]">

                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-white">
                  ✓
                </div>

                <span className="text-[16px] text-[#242528]">
                  Share Your Expertise
                </span>

              </div>


              {/* Monetize Your Passion */}

              <div className="flex items-center gap-[12px]">

                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-white">
                  ✓
                </div>

                <span className="text-[16px] text-[#242528]">
                  Monetize Your Passion
                </span>

              </div>


              {/* Flexibility */}

              <div className="flex items-center gap-[12px]">

                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-white">
                  ✓
                </div>

                <span className="text-[16px] text-[#242528]">
                  Flexibility and Autonomy
                </span>

              </div>


              {/* Community */}

              <div className="flex items-center gap-[12px]">

                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#003BE2] text-white">
                  ✓
                </div>

                <span className="text-[16px] text-[#242528]">
                  Build a Community
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}