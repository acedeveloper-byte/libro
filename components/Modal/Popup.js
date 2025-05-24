"use client";

import { useEffect } from "react";

const ExpediaModal = ({ show, onClose }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [show]);

  const phoneNumber = "+1-833-543-8024"; // Centralized for consistency

  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="modal-backdrop fade show"
          style={{ zIndex: 1040, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <div
        className={`modal fade expedia-popup ${show ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{
          display: show ? "block" : "none",
          zIndex: 1050,
          paddingLeft: "0px",
        }}
        aria-modal={show}
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Wrap content in anchor tag */}
          <a
            href={`tel:${phoneNumber}`}
            className="modal-content text-center text-decoration-none text-dark"
            onClick={(e) => {
              // Let anchor default behavior trigger phone call
            }}
            style={{
              cursor: "pointer",
              display: "block",
              width: "100%",
            }}
          >
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="btn-close"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent call trigger
                  onClose();
                }}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="expedia-logo justify-content-center">
                <h3
                  style={{
                    fontSize: "34px",
                    color: "blue",
                    marginTop: "-3rem",
                  }}
                >
                Expedia Support
                </h3>
              </div>
              <p className="text-muted">Talk to a travel expert and Save 25%</p>
              <h4 className="text-warning mb-3">
                <i className="fa fa-phone-volume"></i> {phoneNumber}
              </h4>
              <hr />
              <p className="text-dark fw-bold">24/7 Reservation Support</p>

              <div className="row expedia-buttons mb-3">
                {[
                  "Tickets Booking",
                  "Changes",
                  "Cancellation",
                  "Customer Service",
                ].map((label, i) => (
                  <div className="col-6 mb-2" key={i}>
                    <div className="btn btn-primary w-100">{label}</div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-center align-items-center mb-3 flex-wrap">
                <img
                  src="/images/airplane.png"
                  className="plane-img img-fluid"
                  alt="Plane"
                />
                <img
                  src="/images/call-girl.png"
                  className="agent-image img-fluid"
                  alt="Agent"
                />
              </div>

              <div className="phone-offer p-2 rounded bg-dark text-white">
                <div>Phone Only Offers</div>
                <div>
                  <i className="fa fa-phone-volume text-white"></i>&nbsp;
                  {phoneNumber}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ExpediaModal;
