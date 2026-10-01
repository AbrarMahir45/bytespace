import CategoryPill from "./CategoryPill";

type Category = {
  label: string;
  active?: boolean;
};

type DiscoverSectionProps = {
  categories: Category[];
};

export default function DiscoverSection({
  categories,
}: DiscoverSectionProps) {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto flex w-[917px] flex-col items-center pt-[72px]">
        {/* Heading */}

        <h2
          className="w-[588px] text-center text-[44px] font-bold leading-[120%] text-[#040819]"
          style={{
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        {/* Description */}

        <p
          className="mt-[16px] w-[917px] text-center text-[18px] leading-[160%] text-[#9A9CA2]"
          style={{
            fontFamily: '"Satoshi", Arial, sans-serif',
          }}
        >
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different fields,
          from technology to the arts, and make a difference in your career
          and life.
        </p>
      </div>

      <div
        className="mx-auto mt-[20px] flex w-[1000px] flex-wrap items-center justify-center gap-x-[8px] gap-y-[12px]"
        style={{
          fontFamily: '"Satoshi", Arial, sans-serif',
        }}
      >
        {categories.map((category) => (
          <CategoryPill
            key={category.label}
            label={category.label}
            active={category.active}
          />
        ))}
      </div>

      {/* Course cards will be added here */}
      <div className="mx-auto mt-[40px] w-[1000px]" />
    </section>
  );
}