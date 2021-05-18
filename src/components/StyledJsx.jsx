export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styeld JSX -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: yellowgreen;
        }

        .button {
          background-color: lightpink;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }

        .button:hover {
          background-color: lightyellow;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

/**
 * StyledJSXは、とりあえずインストールして置く。
 * styelのタグをrenderするものたちと一緒に書いていく。
 * <style></style>
 * styleタグはstyledJSXの者だということを明示するために、
 * jsx="true"を追記しておく
 * styleタグの中身はJSで書くということで{}を書く。
 * {}内はバッククォートで囲って書いていくらしい
 * バッククォート内はCSSと同じようにかける
 * ただ、SaSSの記法は使えないので注意。
 */
