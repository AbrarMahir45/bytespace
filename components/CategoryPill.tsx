type CategoryPillProps = {
  label: string;
  active?: boolean;
};

export default function CategoryPill({
  label,
  active = false,
}: CategoryPillProps) {
  // + More is not a pill
  if (label === "+ More") {
    return (
      <button
        type="button"
        className="px-0 py-0 text-[12px] leading-[120%] text-[#0057FF]"
        style={{
          fontFamily: '"Satoshi", Arial, sans-serif',
        }}
      >
        + More
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`
        rounded-full
        px-[14px]
        py-[7px]
        text-[12px]
        leading-[120%]
        transition-colors
        ${
          active
            ? "bg-[#D4FB20] text-[#242528]"
            : "bg-[#F6F6F6] text-[#5F636B] hover:bg-[#EDEDEF]"
        }
      `}
      style={{
        fontFamily: '"Satoshi", Arial, sans-serif',
      }}
    >
      {label}
    </button>
  );
}