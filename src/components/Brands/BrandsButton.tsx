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
        className="w-full sm:w-[30%]"
      >
        <button className="w-full h-[70px] p-5 rounded-[40px] bg-[#B42423] text-white text-xl sm:text-2xl cursor-pointer">
          ご予約はこちらから
        </button>
      </a>
    </div>
  );
};

export default BrandsButton;
