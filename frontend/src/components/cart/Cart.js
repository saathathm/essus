import { Fragment } from "react";
export default function Cart() {
  return (
    <Fragment>
      <h2 className="mt-5">
        Your Cart: <b>2 items</b>
      </h2>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
          <hr />
          <div className="cart-item">
            <div className="row">
              <div className="col-4 col-lg-3">
                <img
                  src="./images/products/1.jpg"
                  alt="Laptop"
                  height="90"
                  width="115"
                />
              </div>

              <div className="col-5 col-lg-3">
                <a href="#">
                  OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with
                  No Cost EMI/Additional Exchange Offers
                </a>
              </div>

              <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                <p id="card_item_price">$245.67</p>
              </div>

              <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                <div className="stockCounter d-inline">
                  <span className="btn btn-danger minus">-</span>
                  <input
                    type="number"
                    className="form-control count d-inline"
                    value="1"
                    readOnly
                  />

                  <span className="btn btn-primary plus">+</span>
                </div>
              </div>

              <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                <i id="delete_cart_item" className="fa fa-trash btn btn-danger"></i>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal: <span className="order-summary-values">1 (Units)</span>
            </p>
            <p>
              Est. total: <span className="order-summary-values">$245.67</span>
            </p>

            <hr />
            <button id="checkout_btn" className="btn btn-primary btn-block">
              Check out
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
