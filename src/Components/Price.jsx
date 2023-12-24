const formatPersianNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const PriceComponent = ({ price }) => {
  const formattedPrice = `${formatPersianNumber(price)} تومان`;

  return <p className="text-center fw-bolder fs-medium-nj mb-0">{formattedPrice}</p>;
};

// Example usage
const Price = () => {
  const price = 320000;

  return (
    <div>
      <PriceComponent price={price} />
    </div>
  );
};

export default Price;
