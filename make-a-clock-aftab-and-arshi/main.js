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
    getDegrees: ({ hours }) => (360 / 24) * hours,
  },
};

const getHoursMinutesSeconds = () => {
  const now = new Date();
  return {
    hours: now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600,
    minutes: now.getMinutes() + now.getSeconds() / 60,
    seconds: now.getSeconds(),
  };
};

function tick() {
  const now = getHoursMinutesSeconds();
  Object.values(timeData).forEach((o) => {
    const rotation = o.getDegrees(now);
    o.el.style.transform = `rotate(${rotation}deg)`;
  });
}

const intervalId = setInterval(tick, 1000);
