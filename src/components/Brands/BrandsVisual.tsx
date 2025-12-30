import React from "react";


const BrandsVisual = ({ imge }: { imge: string }) => {
      return (
        <>
            <div className="w-full object-cover">
                <img src={imge} alt="" />
            </div>
        </>
  );

}
export default BrandsVisual;
