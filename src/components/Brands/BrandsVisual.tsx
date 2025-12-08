import React from "react";


const BrandsVisual = ({ imge }: { imge: string }) => {
      return (
        <>
            <div className="bg-gray w-screen h-screen">
                <img src={imge} alt="" />
            </div>
        </>
  );

}
export default BrandsVisual;
