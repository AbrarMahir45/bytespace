type PartnerLogo = {
  src: string;
  alt: string;
};

type LogoPartnerProps = {
  logos: PartnerLogo[];
};

export default function LogoPartner({ logos }: LogoPartnerProps) {
  return (
    <section className="h-[202px] w-full bg-[#F6F6F6]">
      <div className="mx-auto flex h-full w-[1132px] items-center gap-[72px]">
        {logos.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            className="h-auto w-auto shrink-0"
          />
        ))}
      </div>
    </section>
  );
}