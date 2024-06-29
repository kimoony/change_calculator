import "../style/TopMenu.css";

function TopMenu({ weightShow, setWeightShow, typeChecked, setTypeChecked }) {
  return (
    <section className="postType">
      {weightShow === true && typeChecked === "익일" ? (
        <section className="postType">
          <button
            className="typeBtn"
            style={{ backgroundColor: "rgb(82, 218, 157)" }}
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("익일");
            }}
          >
            익일특급
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("등기");
            }}
          >
            등기
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("일반");
            }}
          >
            일반우편
          </button>
        </section>
      ) : weightShow === true && typeChecked === "등기" ? (
        <section className="postType">
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("익일");
            }}
          >
            익일특급
          </button>
          <button
            className="typeBtn"
            style={{ backgroundColor: "rgb(82, 218, 157)" }}
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("등기");
            }}
          >
            등기
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("일반");
            }}
          >
            일반우편
          </button>
        </section>
      ) : weightShow === true && typeChecked === "일반" ? (
        <section className="postType">
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("익일");
            }}
          >
            익일특급
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("등기");
            }}
          >
            등기
          </button>
          <button
            className="typeBtn"
            style={{ backgroundColor: "rgb(82, 218, 157)" }}
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("일반");
            }}
          >
            일반우편
          </button>
        </section>
      ) : (
        <section className="postType">
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("익일");
            }}
          >
            익일특급
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("등기");
            }}
          >
            등기
          </button>
          <button
            className="typeBtn"
            onClick={() => {
              setWeightShow(true);
              setTypeChecked("일반");
            }}
          >
            일반우편
          </button>
        </section>
      )}
    </section>
  );
}

export default TopMenu;
