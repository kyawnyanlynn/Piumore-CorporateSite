import React from "react";


const BrandsVisual = ({ imge }: { imge: string }) => {
      return (
        <>
            <div className="w-full object-cover translate-y-0 sm:translate-y-10">
                <img src={imge} alt="" />
            </div>
        </>
  );

}
export default BrandsVisual;
