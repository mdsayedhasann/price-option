import propTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div>
      <div className="bg-slate-100 py-10 my-2 text-center">
        {
          <>
            <>
              <span className="text-4xl ">{price}</span>
              <span className="text-xl text-center">/mon</span>
            </>
            <h4 className="my-3 text-3xl">{name}</h4>
            <div className=" flex-grow">
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="py-2 px-5 bg-pink-400 text-white text-center rounded-3xl my-4">Buy Now</button>
          </>
        }
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  option: propTypes.object,
};

export default PriceOption;
