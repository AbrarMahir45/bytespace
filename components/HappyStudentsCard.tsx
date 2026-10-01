const avatars = [
  "happy-student-01.png",
  "happy-student-02.png",
  "happy-student-03.png",
  "happy-student-04.png",
  "happy-student-05.png",
  "happy-student-06.png",
  "happy-student-07.png",
];

export default function HappyStudentsCard() {
  return (
    <div className="h-[121px] w-[258px] rounded-[16px] bg-white p-[16px]">
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
        {avatars.map((avatar, index) => (
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
  );
}