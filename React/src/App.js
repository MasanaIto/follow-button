import React from "react";

const data = [
  {
    id: 1,
    account_name: "ウサチャ",
    account_id: "@usausacha",
    description:
      "ドレッシングパフェ専属スカウトマスコットのウサギの妹。3rdシーズンで学校を卒業しトライアングルのマネージャーに就任した後、ノンシュガーのマネージャーを務める。",
    isFollow: false,
  },
  {
    id: 2,
    account_name: "プニコン",
    account_id: "@punicon",
    description:
      "ユニコーンタイプのスカウトマスコット。夢川ゆいのマネージャー。産まれたばかりで「プニコン」としかしゃべれず、現時点では本能のままでしか行動できない。",
    isFollow: true,
  },
  {
    id: 3,
    account_name: "山本五十六",
    account_id: "@iso_6",
    description:
      "日本の海軍軍人。最終階級は元帥海軍大将。第26、27代連合艦隊司令長官。海軍兵学校32期生。前線視察の際、ブーゲンビル島上空で戦死（海軍甲事件）。旧姓は高野。栄典は正三位大勲位功一級。",
    isFollow: false,
  },
];

function App() {
  // dataをstateに渡す
  const [accounts, setAccounts] = React.useState(data);
  // onClickFollowメソッドを作成
  const onClickFollow = React.useCallback(
    (id) => {
      const updatedAccounts = accounts.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            isFollow: !e.isFollow,
          };
        } else {
          return e;
        }
      });
      setAccounts(updatedAccounts);
    },
    [accounts, setAccounts]
  );
  return (
    // useStateを使って生成されたstateであるaccountsを使い描画する
    <ul class="accountList">
      {accounts.map((e) => {
        return (
          <li key={e.id} class="accountList__item">
            <div>
              <div class="account__summary">
                <div>
                  <p class="account__name">{e.account_name}</p>
                  <p class="account__id">{e.account_id}</p>
                </div>
                <div>
                  <button
                    type="button"
                    class={`followBtn ${e.isFollow ? "isFollow" : ""}`}
                    // クリック時にonClickFollowメソッドを実行
                    onClick={() => onClickFollow(e.id)}
                  >
                    {e.isFollow ? "フォロー中":"フォローする"}
                  </button>
                </div>
              </div>
              <p class="account__description">{e.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
