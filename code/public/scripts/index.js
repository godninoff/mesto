const togglePassword = (passwordInput, togglePasswordButton) => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "Спрятать пароль";
    togglePasswordButton.setAttribute("aria-label", "Спрятать пароль.");
  } else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "Показать пароль";
    togglePasswordButton.setAttribute(
      "aria-label",
      "Показать пароль как простой текст. Предупреждение: это отобразит пароль на экране."
    );
  }
};

const enablePasswordToggle = () => {
  const togglePasswordButtonsList = Array.from(
    document.querySelectorAll(".form__toggle-password")
  );

  togglePasswordButtonsList.forEach((togglePasswordButton) => {
    const togglePasswordHandler = (event) => {
      const formSection = event.target.closest(".form__section");
      const passwordInput = formSection.querySelector(
        ".form__input_type_password"
      );

      togglePassword(passwordInput, togglePasswordButton);
    };

    togglePasswordButton.addEventListener("click", togglePasswordHandler);
  });
};

enablePasswordToggle();
