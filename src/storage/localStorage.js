export const setStorageUserData = () => {
  if (!localStorage.getItem("userData")) {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name: "Иван Иванов",
        division: "ДАКиПР, СМБ, Спецпродукты",
        balance: 45678,
      })
    );
  }
};

export const getStorageUserData = () => JSON.parse(localStorage.getItem("userData"));

export const buyItem = (price) => localStorage.setItem("userData", JSON.stringify({...getStorageUserData(), balance: +getStorageUserData().balance - price }))
