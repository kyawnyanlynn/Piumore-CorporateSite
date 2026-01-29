const BrandsVisual = ({ imge }: { imge: string }) => {
  return (
    <>
      <div className="w-full object-cover mt-16">
        <img src={imge} alt="ブランドのビジュアル写真" />
      </div>
    </>
  );
};
export default BrandsVisual;
