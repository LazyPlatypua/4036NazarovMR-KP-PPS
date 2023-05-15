function saveFormData() {
  const form = document.getElementById("registration-form");
  const formData = new FormData(form);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  data.username = document.getElementById("username-input").value;
  localStorage.setItem("formData", JSON.stringify(data));
}

function loadFormData() {
  const data = localStorage.getItem("formData");
  if (data) {
      const form = document.getElementById("registration-form");
      const fields = Object.keys(JSON.parse(data));
      for (const field of fields) {
          if (form.elements[field]) {
              form.elements[field].value = JSON.parse(data)[field];
          }
      }
  }
}

function initializeForm() {
  loadFormData();

  const form = document.getElementById("registration-form");
  form.addEventListener("input", saveFormData);
}

document.addEventListener("DOMContentLoaded", initializeForm);