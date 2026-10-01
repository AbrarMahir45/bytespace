type CourseCardProps = {
  image: string;
  title: string;
  creator: string;
  rating: string;
  price: string;
};

const students = [
  "/assets/course/student 1.png",
  "/assets/course/student 2.png",
  "/assets/course/student 3.png",
  "/assets/course/student 4.png",
];

export default function CourseCard({
  image,
  title,
  creator,
  rating,
  price,
}: CourseCardProps) {
  return (
    <article className="h-[384px] w-[373px] rounded-[24px] border border-[#E5E5E5] bg-white p-[8px]">
      {/* Course Image */}
      <div className="h-[225px] w-full overflow-hidden rounded-[16px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title + Rating */}
      <div className="mt-[8px] flex h-[29px] items-center justify-between">
        <h3
          className="max-w-[275px] truncate text-[16px] font-semibold leading-[120%] text-[#040819]"
          style={{
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          {title}
        </h3>

        <div className="flex h-[29px] w-[50px] items-center justify-end gap-[3px]">
          <span
            className="text-[20px] leading-[120%] text-[#82868E]"
            style={{
              fontFamily: '"Satoshi", Arial, sans-serif',
            }}
          >
            {rating}
          </span>

          <img
            src="/assets/course/star.png"
            alt=""
            className="h-[20px] w-[20px]"
          />
        </div>
      </div>

      {/* Creator */}
      <p
        className="mt-[1px] text-[10px] leading-[120%] text-[#0057FF]"
        style={{
          fontFamily: '"Satoshi", Arial, sans-serif',
        }}
      >
        by {creator}
      </p>

      {/* Level + Students */}
<div className="mt-[10px] flex items-center gap-[8px]">
  {/* Beginner */}
  <div className="flex h-[26px] items-center gap-[5px] rounded-full bg-[#F6F6F6] px-[9px]">
    <span className="flex items-end gap-[2px]">
      <span className="h-[7px] w-[2px] rounded-full bg-[#82868E]" />
      <span className="h-[10px] w-[2px] rounded-full bg-[#82868E]" />
      <span className="h-[13px] w-[2px] rounded-full bg-[#82868E]" />
    </span>

    <span
      className="text-[9px] leading-[120%] text-[#5F636B]"
      style={{
        fontFamily: '"Satoshi", Arial, sans-serif',
      }}
    >
      Beginner
    </span>
  </div>

  {/* Students */}
  <div className="flex items-center">
    {students.map((student, index) => (
      <img
        key={student}
        src={student}
        alt=""
        className={`h-[24px] w-[24px] rounded-full border-2 border-white object-cover ${
          index > 0 ? "-ml-[7px]" : ""
        }`}
      />
    ))}

    <span className="-ml-[7px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#D4FB20] text-[8px] font-medium text-[#242528]">
      26+
    </span>
  </div>
</div>

      {/* Price */}
      <div className="mt-[10px] flex items-baseline gap-[2px]">
        <span
          className="text-[16px] font-semibold leading-[120%] text-[#0057FF]"
          style={{
            fontFamily: "Poppins, Arial, sans-serif",
          }}
        >
          ${price}
        </span>

        <span
          className="text-[8px] leading-[120%] text-[#82868E]"
          style={{
            fontFamily: '"Satoshi", Arial, sans-serif',
          }}
        >
          /lifetime
        </span>
      </div>
    </article>
  );
}