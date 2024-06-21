import "../style/TopMenu.css";

function TopMenu({ weightShow, setWeightShow, setTypeChecked }) {
  return (
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
  );
}

export default TopMenu;
