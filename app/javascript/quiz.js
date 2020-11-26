const quiz = [
  {
    question: 'FCバルセロナで歴史上最高と呼ばれる選手は誰?',
    answers: [
      'クライフ',
      'ロナウジーニョ',
      'メッシ',
      'プジョル'
    ],
    correct: 'メッシ'
  },{
    question: 'FCバルセロナの永遠のライバルと呼ばれるマドリードがホームのチームはどれ?',
    answers: [
      'エスパニョール',
      'レアル・マドリード',
      'アトレティコ・マドリード',
      'レアル・ソシエダ'
    ],
    correct: 'レアル・マドリード'
  },{
    question: 'FCバルセロナのサッカー哲学を植え付けた人物といえば誰?',
    answers: [
      'クライフ',
      'マラドーナ',
      'メッシ',
      'ライカールト'
    ],
    correct: 'クライフ'
  },{
    question: 'FCバルセロナのサッカー哲学を植え付けた人物といえば誰?',
    answers: [
      'クライフ',
      'マラドーナ',
      'メッシ',
      'ライカールト'
    ],
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) =>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else {
    window.alert('不正解！');
  };

  quizIndex++;

  if (quizIndex < quizLength){
     //問題数があればこちらの実行
     setupQuiz();
  } else {
     //問題数がなければこちらの実行
     window.alert('終了！あなたの正解数は '+ score + '/' + quizLength + 'です！');
  }
}

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}