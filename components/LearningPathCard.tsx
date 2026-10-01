type LearningPathCardProps = {
  label: string;
  image: string;
};

export default function LearningPathCard({
  label,
  image,
}: LearningPathCardProps) {
  return (
    <div className="flex h-[167px] w-[167px] flex-col items-center justify-center rounded-[24px] border border-[#D9DADC] bg-white">
      <img
        src={image}
        alt=""
        className="h-[60px] w-[60px]"
      />

      <span
        className="mt-[8px] text-center text-[16px] leading-[120%] text-[#242528]"
        style={{ fontFamily: '"Satoshi", Arial, sans-serif' }}
      >
        {label}
      </span>
    </div>
  );
}