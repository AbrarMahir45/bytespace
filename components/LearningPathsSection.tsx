import LearningPathCard from "./LearningPathCard";

const learningPaths = [
  {
    label: "Design",
    image: "/assets/learningpath/img 1.png",
  },
  {
    label: "Development",
    image: "/assets/learningpath/img 2.png",
  },
  {
    label: "IT & Software",
    image: "/assets/learningpath/img 3.png",
  },
  {
    label: "Business",
    image: "/assets/learningpath/img 4.png",
  },
  {
    label: "Marketing",
    image: "/assets/learningpath/img 5.png",
  },
  {
    label: "Photography",
    image: "/assets/learningpath/img 6.png",
  },
];

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white pb-[72px]">

      {/* =================================
          TEXT
      ================================== */}

      <div className="mx-auto flex w-[917px] flex-col items-center pt-[72px]">

        <h2
          className="w-[792px] text-center text-[36px] font-semibold leading-[120%] text-[#040819]"
          style={{
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          Explore Diverse Learning Paths at Bytespace
        </h2>

        <p
          className="mt-[16px] w-[917px] text-center text-[18px] leading-[160%] text-[#9A9CA2]"
          style={{
            fontFamily: '"Satoshi", Arial, sans-serif',
          }}
        >
          At Bytespace, we believe in empowering individuals through
          knowledge. Our diverse range of courses spans various fields,
          ensuring there's something for everyone. Unleash your potential
          and explore our carefully curated categories.
        </p>

      </div>


      {/* =================================
          LEARNING PATH CARDS
      ================================== */}

      <div className="mx-auto mt-[40px] flex w-[1202px] gap-[40px]">

        {learningPaths.map((path) => (
          <LearningPathCard
            key={path.label}
            label={path.label}
            image={path.image}
          />
        ))}

      </div>

    </section>
  );
}