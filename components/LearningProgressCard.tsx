export default function LearningProgressCard() {
  return (
    <div className="h-[131px] w-[232px] rounded-[16px] bg-white p-[16px]">
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
  );
}