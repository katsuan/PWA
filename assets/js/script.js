if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service worker registered.", reg);
  });
}

// プッシュ通知の設定
window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "faa882f2-6bfe-4802-970d-5c2e87a47ce9",
    safari_web_id: "web.onesignal.auto.105cd246-aae6-4c14-8684-2fd8214524d1",
    promptOptions: {
      customlink: {
        enabled: true /* Required to use the Custom Link */,
        style: "button" /* Has value of 'button' or 'link' */,
        size: "medium" /* One of 'small', 'medium', or 'large' */,
        color: {
          button:
            "#10265C" /* Color of the button background if style = "button" */,
          text: "#FFFFFF" /* Color of the prompt's text */,
        },
        text: {
          subscribe: "Subscribe to push notifications",
          unsubscribe: "Unsubscribe from push notifications",
          explanation:
            "Get updates from all sorts of things that matter to you",
        },
        unsubscribeEnabled: true /* Controls whether the prompt is visible after subscription */,
        welcomeNotification: {
          message: "登録ありがとうございます",
        },
      },
    },
  });
});

let time = null;
const wrap = document.querySelector("#buttonWrap");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const text = document.querySelector("#result");

const getTime = () => {
  return new Date().getTime();
};

const formatSeconds = (time) => {
  return time / 1000;
};

startButton.addEventListener("click", () => {
  wrap.classList.add("-play");
  time = getTime();
  text.innerHTML = "";
});

stopButton.addEventListener("click", () => {
  wrap.classList.remove("-play");
  const count = getTime() - time;

  const result =
    count === 3000
      ? "ぴったり！おめでとう！！"
      : 2900 < count && count < 3100
      ? "すごい！"
      : 2500 < count && count < 3500
      ? "おしい！"
      : "もう1回やってみよう";

  text.innerHTML = `${formatSeconds(count)}秒！${result}`;
});
