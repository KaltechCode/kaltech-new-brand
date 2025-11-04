import { CloseTwo } from "@/components/svg";

export const ModalForm = ({
  openForm,
  handleOpen,
}: {
  openForm: boolean;
  handleOpen: () => void;
}) => {
  return (
    <div
      className={`tp-modal-form`}
      style={{
        // position: "fixed",
        // top: 0,
        // right: 0,
        // height: "100%",
        // background: "rgba(24, 24, 24, 0.6)",
        // zIndex: "9999",
        // width: "100%",
        // padding: "3% 5%",
        display: `${openForm ? "block" : "none"}`,
      }}
    >
      <div
        className="tp-modal-form-wrapper"
        style={
          {
            //   position: "relative",
            //   left: 0,
            //   top: 0,
            //   height: "100%",
            //   width: "100%",
            //   display: "flex",
            //   justifyContent: "center",
          }
        }
      >
        <div
          className="tp-modal-form-content"
          style={
            {
              // width: "100%",
              // height: "100%",
              // background: "#fff",
              // borderRadius: "20px",
              // padding: "16% 5%",
              // position: "relative",
            }
          }
        >
          <h3 style={{ textAlign: "center" }}> contact Our Team</h3>
          <p style={{ marginTop: "25px" }}>
            We&apos;re available 24 hours 7 day a we
          </p>

          <div
            className="tp-offcanvas-close"
            style={{
              position: "absolute",
              right: "5%",
              top: "1%",
              height: "20px",
            }}
          >
            <button
              className="tp-offcanvas-close-btn"
              onClick={() => handleOpen()}
            >
              <CloseTwo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
