// // import { useState } from "react";
// // import axios from "axios";
// // import "./styles/App.css";

// // const API_KEY = "64ff613a693acc697eb218aa7357933b";
// // const BASE_URL = (city) =>
// //   `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// // function App() {
// //   const [city, setCity] = useState("");
// //   const [weatherData, setWeatherData] = useState(null);
// //   const [error, setError] = useState("");

// //   const submitButton = () => {
// //     if (city) {
// //       axios
// //         .get(BASE_URL(city))
// //         .then((response) => {
// //           setWeatherData(response.data).setError(null);
// //         })
// //         .catch((error) => {
// //           setError(
// //             "Не удалось загрузить данные о погоде. Проверьте название города."
// //           );
// //           setWeatherData(null);
// //         });
// //     }
// //   };

// //   console.log(city);

// //   return (
// //     <>
// //       <div style={{ padding: "20px" }}>
// //         <h1>Приложение погоды</h1>
// //         <input
// //           type="text"
// //           placeholder="Введите город"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //         />
// //         <button onClick={submitButton}>Получить город</button>
// //         {error && <p style={{ color: "red" }}>{error}</p>}
// //         {weatherData && (
// //           <div>
// //             <h2>{weatherData.name}</h2>
// //             <p>Температура: {weatherData.main.temp}°C</p>
// //             <p>Состояние: {weatherData.weather[0].description}</p>
// //             <p>Влажность: {weatherData.main.humidity}%</p>
// //             <p>Скорость ветра: {weatherData.wind.speed} m/c</p>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // // import { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { BASE_URL } from "./config";

// // // function App() {
// // //   const [base, setBase] = useState(null);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     axios
// // //       .get(BASE_URL)
// // //       .then(({ data }) => {
// // //         setBase(data);
// // //         setError(null); // Сбрасываем ошибку при успешном запросе
// // //       })
// // //       .catch((err) => {
// // //         console.error(err);
// // //         setError("Ошибка при получении данных");
// // //       });
// // //   }, []);

// // //   if (error) {
// // //     return <h1>{error}</h1>;
// // //   }

// // //   if (!base) {
// // //     return <h1>Загрузка...</h1>;
// // //   }

// // //   return (
// // //     <>
// // //       <h1>Погода в {base.name}</h1>
// // //       <p>Температура: {(base.main.temp - 273, 15)}</p>
// // //       <p>Описание: {base.weather[0].description}</p>
// // //     </>
// // //   );
// // // }

// // // export default App;

// import { useState } from "react";
// import axios from "axios";
// import "./styles/App.css";

// const API_KEY = "64ff613a693acc697eb218aa7357933b";
// const BASE_URL = (city) =>
//   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// function App() {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState("");

//   const submitButton = () => {
//     if (city) {
//       axios
//         .get(BASE_URL(city))
//         .then((response) => {
//           setWeatherData(response.data);
//           setError(""); // Сбрасываем ошибку при успешном запросе
//         })
//         .catch((error) => {
//           setError(
//             "Не удалось загрузить данные о погоде. Проверьте название города."
//           );
//           setWeatherData(null);
//         });
//     }
//   };

//   return (
//     <>
//       <div style={{ padding: "20px" }}>
//         <h1>Приложение погоды</h1>
//         <input
//           type="text"
//           placeholder="Введите город"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={submitButton}>Получить погоду</button>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {weatherData && (
//           <div>
//             <h2>{weatherData.name}</h2>
//             <p>Температура: {weatherData.main.temp}°C</p>
//             <p>Состояние: {weatherData.weather[0].description}</p>
//             <p>Влажность: {weatherData.main.humidity}%</p>
//             <p>Скорость ветра: {weatherData.wind.speed} m/c</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import axios from "axios";
import "./styles/App.css";

const API_KEY = "64ff613a693acc697eb218aa7357933b";
const BASE_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`;

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const submitButton = () => {
    if (city) {
      axios
        .get(BASE_URL(city))
        .then((response) => {
          setWeatherData(response.data);
          setError(""); // Сбрасываем ошибку при успешном запросе
        })
        .catch((error) => {
          console.log("Ошибкак рпи получение данных: ", error);
          setError(
            "Не удалось загрузить данные о погоде. Проверьте название города."
          );
          setWeatherData(null);
        });
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Приложение погоды</h1>
        <input
          type="text"
          placeholder="Введите город"
          value={city.replace(/\s+/g, "")}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={submitButton}>Получить погоду</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Температура: {weatherData.main.temp}°C</p>
            <p>Состояние: {weatherData.weather[0].description}</p>
            <p>Влажность: {weatherData.main.humidity}%</p>
            <p>Скорость ветра: {weatherData.wind.speed} m/c</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
