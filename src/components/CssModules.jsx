import cssModules from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={cssModules.container}>
      <p className={cssModules.title}>- CSS Modules -</p>
      <button className={cssModules.button}>FIGHT!</button>
    </div>
  );
};

/**
 * CSS Modulesを使うときは、
 * node-sassをinstall
 * CSS Modulesはjsxと対になるcssを用意する感じになる。
 * CssModules.jsxの対として、CssModules.module.scssを作る
 * CssModules.jsxにCssModules.module.scssをインポートして、クラスを付ける
 * クラス名は、インポートした時に付けた名前に.クラス名
 */
