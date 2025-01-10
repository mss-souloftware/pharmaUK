import Image from 'next/image';
import React from 'react';
import WeeklyPlan from './feature/weeklyPlan';

const CartProduct = ({
  product,
  onIncrease,
  onDecrease,
  onRemove,
  deliveryCharge,
}) => { 
  const totalPrice = product.price * product.quantity;  
  const totalProductPrice = totalPrice + deliveryCharge; // Including delivery charge

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row border-b border-gray-400 py-4 mb-10 ">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Image
            src={product.imageUrl}
            alt="Product Image"
            width={150}
            height={150}
            className="w-32 h-32 lg:w-[15rem] lg:h-[15rem] object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>

          <p className="text-xl font-extrabold text-center my-3 flex">
            Trust <span className="text-[#50C878]">Pilot</span>
          </p>

          {/* Star Rating */}
          <div className="flex items-center my-3">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src="/trustPilotIcon.png"
                height={29}
                width={29}
                alt="starIcon"
              />
            ))}
          </div>

          {/* Quantity Controls */}
          <div className="mt-4 flex items-center">
            <span className="mr-2 text-gray-600">Quantity:</span>
            <div className="flex items-center">
              <button
                className="bg-gray-200 rounded-l-lg px-2 py-1 lg:w-10 hover:text-white hover:bg-hoverUnderlineColor hover:cursor-pointer transition-all duration-200 transform hover:scale-105"
                onClick={onDecrease}
                disabled={product.quantity <= 1}
              >
                -
              </button>

              <span className="mx-2 text-gray-600 text-base xl:text-xl">{product.quantity}</span>

              <button
                className="bg-gray-200 rounded-r-lg px-2 py-1 lg:w-10 hover:text-white hover:bg-hoverUnderlineColor hover:cursor-pointer transition-all duration-200 transform hover:scale-105"
                onClick={onIncrease}
              >
                +
              </button>
            </div>

            <span className="ml-auto font-bold">${totalProductPrice.toFixed(2)}</span>
          </div>

          {/* Remove Product Button */}
          <div className="mt-3 flex justify-between items-center">
            <button className="text-red-600 hover:underline" onClick={onRemove}>
              Remove
            </button>
          </div>

          {/* Weekly Plan Component */}
        </div>
      </div>
          <WeeklyPlan weekPlan={product.weekPlan}  onFilter={() => {}} />

      {/* Display product delivery charge */}
      <div className="text-center text-sm text-gray-600 mt-2">
        <strong>Delivery Charge:</strong> ${deliveryCharge.toFixed(2)}
      </div>
    </div>
  );
};

export default CartProduct;