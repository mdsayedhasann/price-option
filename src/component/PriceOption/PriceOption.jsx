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
            <h4>{name}</h4>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
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
