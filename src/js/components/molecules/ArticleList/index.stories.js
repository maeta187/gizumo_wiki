import { storiesOf } from '@storybook/vue';
import storyRouter from 'storybook-vue-router';
import note from './README.md';

const targetArray = [
  {
    id: 1,
    title: 'JavaScriptとは',
    content: `
Front Lessonで学習したHTMLやCSSはページを構成し装飾するための**マークアップ言語**です。  
これからやってもらうJavaScriptというものは**プログラミング言語**です。

プログラミング言語というものは「こうしたら、こう動く」というプログラムを作るための言語になります。

JavaScriptと**Java**は別物なので、間違えないようにしましょう。


## 特徴

ここではとっつきづらいことを説明しているので、なんとなく理解できれば問題ないです。

JavaScriptはテキストエディタとブラウザがあれば書いたコードの確認ができます。

なぜかと言うと、JavaScriptは<span style="color: red; font-weight: bold;">ブラウザ側で動作する言語</span>だからです。ブラウザに実装されているJavaScriptエンジンというもので解釈されます。ただ、ブラウザごとにJavaScriptエンジンが違うので、**違う動きをする**ことがあります。  
余談ですが、HTML/CSSはブラウザのレンダリングエンジンというもので解釈されます。

また、書き方がどんどん進化していたり、React・Vueなどのライブラリ・フレームワークがつくられ、一言にJavaScriptと言っても**やってることにはかなりの幅があります**。


## よくやること・できること

JavaScriptでよくやることとして、第一に上がってくるものはやはり<span style="color: red; font-weight: bold;">HTML要素の操作</span>です。

jQueryのレッスンでもやってもらいますが、作ったページにほぼ際限なく動きをつけることが可能です。  
例えば下記のようなことです。

- メニューボタンを押すとスライドして表示されるメニュー
- 画像が順番に切り替わるスライドショー
- スクロールすると表示される、上に戻るボタン
- メニューをクリックするとその場所までスクロールしてくれるもの
- 選択したボタンの種類に紐づく商品のみの表示

ただ、このようなHTML操作に焦点が行きがちですが<span style="color: red; font-weight: bold;">それだけではありません</span>。

それ以外にも、ユーザーが使ってる端末やブラウザの情報を取得して処理を変えることやURLのパラメータによって処理を変えたり、URLを変更して別のページに遷移させることなんかも可能です。  
JavaScriptに触れたこともないという方は想像ができないかもしれませんが、別のサーバーなどにリクエストを送ってそれに応じて返ってきたデータを表示するといったことも可能です。


また、前述のReactやVueではそれとは次元が違う使われ方をされています。それについては、jQueryの次のレッスンで軽く触れる予定です。
    `,
  },
  {
    id: 2,
    title: 'JavaScriptを始めてみよう',
    content: `
## このレッスンでやること

このレッスンでやることは、下記になります。

- console.log()とalert()について
- 変数について
- 四則演算をしてみる
- 配列・オブジェクトについて
- 関数について
- if文・for文について

**基礎的な構文**について学習してもらいます。  
そのあとに、次のレッスンでこのレッスンで学んだことを使って問題に取り組んでもらいます。


## 下準備

ブラウザ（Chrome）とテキストエディタ（自分で使っているもの）を用意しましょう。  
次に、作業用のフォルダとしてわかりやすい場所に、「javascript」フォルダを作りましょう。JavaScriptの基礎は**全部で4レッスン**あるので、それごとにフォルダを作っておきましょう。

例では、下記のような名前でフォルダを分けました。  
このレッスンでは「basic01」の中にあるindex.htmlに書き加えていきます。

\`\`\`
javascript
├─ basic01
│     └─ index.html （このレッスンで使うHTMLファイル）
├─ basic02
├─ basic03
└─ basic04
\`\`\`

HTMLファイルに下記をコピペしましょう。

\`\`\`html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>JavaScriptの練習 - 01</title>
</head>
<body>
<script>
// ここにJavaScriptを書いていきます
</script>
</body>
</html>
\`\`\`

これで準備は完了です。  
HTMLファイルには\`style\`タグを使えばCSSを書くことができます。それと同様にJavaScriptを書きたい場合は\`script\`タグを使えば、その中にJavaScriptを書くことができます。今回は\`script\`タグの中にJavaScriptを書いていきます。  
実際の開発の現場では別ファイルで書くことがほとんどです。

早速JavaScriptを書いていきましょう。


## console.log()・alert()

まずは\`console.log()\`と\`alert()\`を書いていきましょう。  
\`console.log()\`は今後もかなり使うので、ぜひ覚えましょう。

HTMLファイルに下記を書いてブラウザで開くと、小さいウィンドウが表示され「Hello World!」と表示されたと思います。

\`\`\`html
<script>
alert('Hello World!');
</script>
\`\`\`

では次に下記のように書き換えて、ブラウザを再読込みしてみましょう。

\`\`\`html
<script>
console.log('Hello World!');
</script>
\`\`\`

\`console.log()\`はChromeのデベロッパーツールの「Console」のタブに表示されるものなので、デベロッパーツールを開いて確認してみましょう。

デベロッパーツールについては、Front Lessonの「<a href="http://giztech.gizumo-inc.work/categories/4/8" target="_blank">Lesson2 必要なアプリケーションのインストール</a>」の「デベロッパーツールの使用」を読んでください。

「Console」に「**Hello World**」の文字が表示されていると思います。  
\`console.log()\`はJavaScriptであればこれからもずっと使っていくもなので、メモでもして忘れないようにしましょう。


## 変数

次は、<span style="color: red; font-weight: bold;">変数</span>について説明します。

\`\`\`javascript
var text = 'JavaScriptの練習';
console.log(text);
\`\`\`

## オブジェクト

次にオブジェクトについて説明します。  
先ほどの配列を使えば、下記のように変数\`arata\`に名前や年齢、血液型、趣味を定義することができます。

\`\`\`javascript
var arata = ['荒田', '26', 'A', 'card'];
\`\`\`

ただ、\`arata[0]\`で名前が取得できて\`arata[1]\`で年齢が取得できるということがわかるのは、このソースコードを書いた本人だけです。変数の宣言されたところ以外で、\`arata[2]\`という記述を見て「血液型を取得してるんだろうな。」とわかる人はまずいないでしょう。

このようなときに使えるのが**オブジェクト**です。

\`\`\`javascript
var arata = {
name: 'arata',  // key（キー）: value（バリュー）
age: 26,
bloodType: 'A',
favorite: 'card'
};
// 複数のkey（キー）: value（バリュー）の指定は「 , 」区切りで指定します
\`\`\`

## 関数

次は関数についてです。関数と言われてもとっつきづらいイメージしかないと思いますが、どういうときに使えるのかとかは考えず、**ここでは「関数ってこういうもの」と自分なりに理解してもらえれば大丈夫です**。

下記が関数の形になります。まずは下記を書いてみましょう。

\`\`\`javascript
function showConsole() {
return 'This is console in showConsole function!';
}
\`\`\`

\`\`\`javascript
function define1() { // define1という名前の関数
return 'This is console in showConsole function!';
}

var define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
return 'This is console in showConsole function!';
}
\`\`\`


処理を関数として定義する理由としては、まず下記の2点が挙げられます。
- ・読みやすいように処理を小分けにする。
- ・繰り返し行う同じ処理を一つにまとめる。

\`\`\`javascript
if (条件式) {
// ここに条件式がtrue（真）のときの処理を書きます
} else {
// ここに条件式がfalse（偽）のときの処理を書きます
}
\`\`\`

この場合、\`else {}\`の部分は条件式が\`false\`のときに処理されます。

では具体的に見てみましょう。

| 比較演算子 | 意味 |
|:---:|:---:|
| == | 等しい |
| === | 厳密に等しい（型も比較） |
| != | 等しくない |
| !== | 厳密に等しくない（型も比較） |
| > | より大きい |
| >= | 以上 |
| < | 未満 |
| <= | 以下 |

※ （型も比較）の部分は各自調べてみましょう。型についてはこのレッスンの初めの方でさらっと触れた**文字列**や**数値**のことです。

if文の省略記法的なものとして**三項演算子**というものもありますので、各自調べてみましょう。

## for文

次はfor文についてです。for文というのは**繰り返し処理をするためのもの**です。  
基本的な書き方は下記のようになります。


\`\`\`javascript
for (var i = 0; i < 10; i++ ) {
console.log(i + '回目のコンソール');
}
\`\`\`

この例での動きはこのようになっています。  
- 初期値として、iという変数に0を代入しています
- 条件式は i < 10; で、iが10未満の場合に {} の中の処理がされる
- {} の中の処理が終わったら i++ が実行される（i++ とは i = i + 1）
- iが9になるまで繰り返される（10回）
- iが10になると条件を満たさないので、faleになり処理が止まる


少し応用したものを見てみましょう。下記は配列をfor文で扱う例です。

---

基礎的な構文については以上です。  
次のレッスンで問題に取り組んでもらい、理解を深めてもらいます。
`,
  },
];

storiesOf('MOLECULES|ArticleList', module)
  .addDecorator(storyRouter())
  .add('default', () => {
    return {
      template: `<ul>
                  <app-list-item
                    v-for="item in targetArray"
                    :key="item.id"
                  >
                    <app-text>{{ item.title }}</app-text>
                    <app-router-link>
                      詳細
                    </app-router-link>
                    <app-router-link>
                      更新
                    </app-router-link>
                    <app-router-link>
                      <app-button>削除</app-button>
                    </app-router-link>
                  </app-list-item>
                </ul>`,
      props: {
        className: {
          type: String,
          default: '',
        },
        targetArray: {
          type: Array,
          default: targetArray,
        }
      },
      computed: {
        classes() {
          return {
            text: true,
          }
        }
      }
    }
  }, {notes: note});