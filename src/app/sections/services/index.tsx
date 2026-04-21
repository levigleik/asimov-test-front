import companyAmazon from "@/assets/images/Company-amazon.png";
import companyZoom from "@/assets/images/Company-zoom.png";
import { cn } from "@/utils/cn";

export const SectionServices = () => {
  const Card = ({
    cardClassName,
    icon,
    title,
  }: {
    cardClassName: string;
    title: string;
    icon: React.ReactNode;
  }) => (
    <div
      className={cn(
        "flex flex-col gap-5 p-5 rounded-[7px] bg-secondary",
        cardClassName,
      )}
    >
      <h3 className="text-2xl font-medium">{title}</h3>
      {icon}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-360 gap-17.5">
      {/* Header */}
      <div className="flex flex-1 items-center gap-10">
        <h2 className="bg-primary rounded-[7px] px-1.75 text-[40px] font-medium">
          Services
        </h2>
        <p className="text-lg w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* Logotypes */}
      <div className="flex justify-between grayscale-100">
        <img src={companyAmazon.src} alt="Amazon" className="h-12" />
        <img src={companyZoom.src} alt="Zoom" className="h-12" />
      </div>
    </div>
  );
};
