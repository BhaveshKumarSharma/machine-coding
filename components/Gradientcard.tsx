import { cn } from "@/lib/utils";

interface cardTypes {
  gradient: string;
  children: React.ReactNode;
}

// A single card component for reusability and cleaner code
const GradientCard = ({ gradient, children }: cardTypes) => {
  // const baseClasses = "rounded-2xl shadow-xl flex justify-center items-center text-3xl font-bold text-white h-[350px] w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl";
  // const combinedClasses = `${baseClasses} ${gradient}`;

  return (
    <div
      className={cn(
        "rounded-2xl shadow-xl flex justify-center items-center text-3xl font-bold text-white h-[350px] w-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl",
        gradient
      )}
    >
      <div className="text-center p-4">{children}</div>
    </div>
  );
};

export default GradientCard;
