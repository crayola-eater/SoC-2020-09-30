const timeData = {
  s: {
    el: document.querySelector("#seconds"),
    getDegrees: ({ seconds }) => (360 / 60) * seconds,
  },
  m: {
    el: document.querySelector("#minutes"),
    getDegrees: ({ minutes }) => (360 / 60) * minutes,
  },
  h: {
    el: document.querySelector("#hours"),
    getDegrees: ({ hours }) => (360 / 12) * hours,
  },
};

const getNowAsObject = () => {
  const now = new Date();
  return {
    hours:
      now.getHours() +
      now.getMinutes() / 60 +
      now.getSeconds() / 3600 +
      now.getMilliseconds() / 3600e3,

    minutes:
      now.getMinutes() + now.getSeconds() / 60 + now.getMilliseconds() / 60e3,

    seconds: now.getSeconds() + now.getMilliseconds() / 1e3,
  };
};

function tick() {
  const now = getNowAsObject();
  Object.values(timeData).forEach((o) => {
    const rotation = o.getDegrees(now);
    o.el.style.transform = `rotate(${rotation}deg)`;
  });
}

const intervalId = setInterval(tick, 1e3);
