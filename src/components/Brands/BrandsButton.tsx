type BrandsButtonProps = {
  href: string;
};

const BrandsButton = ({ href }: BrandsButtonProps) => {
  return (
    <div className="flex justify-center my-20">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-[250px] h-[58px]
          sm:w-[22%] md:h-[70px]
          flex items-center justify-center
          rounded-[40px]
          bg-[#B42423]
          text-white text-xl sm:text-2xl
          cursor-pointer
          leading-none
        "
      >
        ご予約はこちらから
      </a>
    </div>
  );
};

export default BrandsButton;
