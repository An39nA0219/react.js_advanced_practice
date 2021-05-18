import { memo } from "react";
export const ChildArea = memo((props) => {
  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "lightpink"
  };
  const { open, onclickClose } = props;
  console.log("ChildAreaがレンダリングされた");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onclickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
