import { useState } from 'react';

const Calculator = () => {
  const [price, setPrice] = useState(1);
  const [number, setNumber] = useState('');
  const [discount, setDiscount] = useState('');

  const months = [
    { number: 1 },
    { number: 2 },
    // ... add other months as needed
  ];

  const calculateTotalPrice = (price, number) => {
    // Implement your calculation logic here
    return price * number;
  };

  const calculateDiscountPrice = (price, number, discount) => {
    // Implement your calculation logic here
    return price * number - discount;
  };

  const calculateSale = (number) => {
    // Implement your calculation logic here
    return number; // Replace with actual calculation
  };

  const calculateFinalPrice = (price, number, discount) => {
    // Implement your calculation logic here
    return price * number - discount; // Replace with actual calculation
  };

  return (
    <div className="row m-auto">
      <div className="col-12 col-lg-5 mb-lg-5">
        <div className="my-lg-3">
          <label className="mb-2 h-step-nj fw-bold fs-small-nj">مبلغ درخواستی(ریال)</label>
          <input
            type="number"
            className="form-control p-3 rounded-10-nj"
            style={{ backgroundColor: '#aaacff45' }}
            placeholder="مبلغ پرداخت را وارد کنید: حدااکثر ۲۰۰,۰۰۰,۰۰۰,۰۰۰"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="1"
            max="200000000000"
          />
        </div>
        <div className="my-lg-3">
          <label className="mb-2 h-step-nj fw-bold fs-small-nj">دوره بازپرداخت(ماه)</label>
          <select
            className="form-select form-select-lg mb-3 p-3 rounded-10-nj"
            aria-label=".form-select-lg example"
            style={{ backgroundColor: '#aaacff45' }}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          >
            <option disabled selected>ماه را انتخاب کنید</option>
            {months.map((mn) => (
              <option key={mn.number} value={mn.number}>
                {mn.number} ماهه
              </option>
            ))}
          </select>
        </div>
        <div className="my-lg-3">
          <label className="mb-2 h-step-nj fw-bold fs-small-nj">فاصله اقساط(ماه)</label>
          <div className="d-flex">
            {months.map((mn) => (
              <label
                key={mn.number}
                className=" w-100 fs-small-nj d-flex align-items-center "
                htmlFor={`flexRadioTime-${mn.number + 1}`}
                style={{ cursor: 'pointer' }}
              >
                <input
                  className="form-check-input ms-3"
                  type="radio"
                  name="flexRadioTime"
                  id={`flexRadioTime-${mn.number + 1}`}
                  checked={parseInt(number) === mn.number}
                  onChange={() => setNumber(mn.number)}
                />
                <span className="fs-small-nj ps-1">{mn.number} ماهه</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-lg px-lg-3 py-lg-3 px-3 py-3 w-100 btn-pn-nj rounded-15-nj text-white d-flex align-items-center justify-content-center"
          onClick={() => calculateFinalPrice(price, number, discount)}
        >
          محاسبه اقساط
        </button>
        <a
          type="button"
          href="#"
          className="btn btn-lg px-lg-3 py-lg-3 px-3 w-100 rounded-15-nj d-flex align-items-center justify-content-center btn-outline-dark mt-2 mb-3"
          target="_blank"
        >
          دریافت وام
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-circle me-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </a>
      </div>
      <div className="col-12 col-lg-7 mb-lg-6 px-lg-5 mt-3">
        <div className="p-3 rounded-10-nj text-white mt-lg-5 d-flex justify-content-between me-lg-5" style={{ backgroundColor: 'var(--main-color)' }}>
          <span>مبلغ هر قسط:</span>
          <div className="d-flex">
            <span className="fw-bold fs-large-nj">{calculateTotalPrice(price, number)}</span>
            <span className="text-white me-2 fw-bolder">ریال</span>
          </div>
        </div>
        <div className="p-3 rounded-10-nj text-white mt-lg-3 me-lg-5" style={{ backgroundColor: '#aaacff45' }}>
          <div className="d-flex justify-content-between mb-2 border-bottom border-secondary border-1 p-1">
            <span className="fs-small-nj text-secondary">مبلغ وام درخواستی</span>
            <span className="text-secondary fw-bolder">{price}</span>
            <span className="text-secondary me-2 fw-bolder">ریال</span>
          </div>
          <div className="d-flex justify-content-between mb-2 border-bottom border-secondary border-1 p-1">
            <span className="fs-small-nj text-secondary">کارمزد</span>
            <div className="d-flex">
              <span className="text-secondary fw-bolder">{calculateDiscountPrice(price, number, discount)}</span>
              <span className="text-secondary me-2 fw-bolder">ریال</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="fs-small-nj text-secondary">نرخ سود</span>
            <div className="d-flex">
              <span className="text-secondary fw-bolder">{calculateSale(number)}</span>
              <span className="text-secondary me-2 fw-bolder">درصد</span>
            </div>
          </div>
          <hr style={{ border: '1px dashed black' }} />
          <div className="d-flex justify-content-between mb-2 text-dark">
            <span className="fs-large-nj fw-bold">مبلغ قابل پرداخت نهایی:</span>
            <div className="d-flex">
              <span className="fs-large-nj fw-bolder">{calculateFinalPrice(price, number, discount)}</span>
              <span className="text-secondary me-2 fw-bolder">ریال</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
