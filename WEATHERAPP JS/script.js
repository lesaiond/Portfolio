const link =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const ApiToken = "QVTXDDQKXQHR7P2HA4BGF4Y9M";

let store = {
  address: "Chicago",
  feelslike: 0,
  temp: 0,
  uvindex: 0,
  conditions: "",
  datetime: "",
  sunrise: "",
  sunset: "",
  datetime: "",
  properties: {
    cloudcover: {},
    humidity: {},
    visibility: {},
    windspeed: {},
    icon: {},
    pressure: {},
  },
};

const root = document.getElementById("root");
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const textInput = document.getElementById("text-input");
const form = document.getElementById("form");

const fetchData = async () => {
  try {
    const result = await fetch(`${link}${store.address}?key=${ApiToken}`);
    const data = await result.json();
  
    const {
      currentConditions: {
        feelslike,
        cloudcover,
        humidity,
        temp,
        uvindex: uvIndex,
        visibility,
        windspeed: windSpeed,
        conditions,
        icon,
        sunrise,
        sunset,
        datetime,
        pressure,
      },
      address,
    } = data;
  
    store = {
      ...store,
      address,
      feelslike,
      address,
      temp,
      conditions,
      datetime,
      icon,
      sunrise,
      sunset,
      datetime,
      properties: {
        uvIndex: {
          title: "UV index",
          value: `${uvIndex}`,
          icon: "uv-index.png",
        },
        cloudcover: {
          title: "cloudcover",
          value: `${cloudcover}%`,
          icon: "cloud.png",
        },
        humidity: {
          title: "humidity",
          value: `${humidity}%`,
          icon: "humidity.png",
        },
        visibility: {
          title: "visibility",
          value: `${visibility}%`,
          icon: "visibility.png",
        },
        windSpeed: {
          title: "wind speed",
          value: `${windSpeed} mph`,
          icon: "wind.png",
        },
        pressure: {
          title: "pressure",
          value: `${pressure} hPa`,
          icon: "gauge.png",
        },
      },
    };
    console.log(data);
    renderComponent();
  } catch(err) {
    console.log(err);
  }
};

const containerClass = (sunrise, sunset, currentTime) => {
  const timeToSeconds = (time) =>
    time.split(":").reduce((acc, time) => 60 * acc + +time);

  const isDaytime =
    timeToSeconds(currentTime) >= timeToSeconds(sunrise) &&
    timeToSeconds(currentTime) <= timeToSeconds(sunset);

  return isDaytime ? "is-day" : "";
};

const renderProperty = (properties) => {
  return Object.values(properties)
    .map(({ title, value, icon }) => {
      return `
      <div class="property">
        <div class="property-icon">
          <img src="./img/icons/${icon}" alt="">
        </div>
        <div class="property-info">
          <div class="property-info__value">${value}</div>
          <div class="property-info__description">${title}</div>
        </div>
      </div>`;
    })
    .join("");
};

const markup = () => {
  const {
    address,
    conditions,
    temp,
    datetime,
    icon,
    sunrise,
    sunset,
    properties,
  } = store;
  return `
  <div class="container ${containerClass(sunrise, sunset, datetime)}">
      <div class="top">
        <div class="city">
          <div class="city-subtitle">Weather Today in</div>
          <div class="city-title" id="city"><span>${address}</span></div>
        </div>
        <div class="city-info">
          <div class="top-left">
            <img id="icon" src="./img/${getImage(
              icon
            )}" alt="" style="max-width: 70px;">
            <div class="description">${conditions}</div>
          </div>
          <div class="top-right">
            <div class="city-info__subtitle">as of ${datetime}</div>
            <div class="city-info__title">${temp}°F</div>
          </div>
        </div>
      </div>
      <div id="properties">${renderProperty(properties)}</div>
    </div>
  `;
};

const getImage = (icon) => {
  const value = icon.toLowerCase();

  switch (value) {
    case "partly-cloudy-day" || "partly-cloudy-night":
      return "partly.png";
      break;
    case "cloudy":
      return "cloud.png";
      break;
    case "clear-day":
      return "clear.png";
      break;

    default:
      return "sunny.png";
      break;
  }
};

const togglePopupClass = () => {
  popup.classList.toggle("active");
};

const renderComponent = () => {
  root.innerHTML = markup();
  const address = document.getElementById("city");

  address.addEventListener("click", togglePopupClass);
};

const handleInput = (e) => {
  store = {
    ...store,
    address: e.target.value,
  };
};

const handleSubmit = (e) => {
  e.preventDefault()
  if(store.city) return null
  fetchData()
  togglePopupClass()
}

form.addEventListener("submit", handleSubmit);
textInput.addEventListener("input", handleInput);
close.addEventListener("click", togglePopupClass);


fetchData();
