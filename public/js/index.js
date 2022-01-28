import { formData } from "./formData.js";
import {
  createDropdownSelect,
  createSubtitle,
  createTitle,
  getFormData,
  sendFormData,
  createLabel,
  createInput,
  createSubmitButton,
  createError,
  createTokenReloadButton,
} from "./formHandler.js";

const loadPage = (formType, setFormType) => {
  const formDataObject = formData[formType];

  const header = document.getElementById("header");
  const form = document.querySelector("form");
  header.innerText = "";
  form.innerHTML = "";
  form.classList.remove("was-validated");

  const title = createTitle(formDataObject.header.title);
  const subtitle = createSubtitle(formDataObject.header.subtitle);
  header.appendChild(title);
  header.appendChild(subtitle);

  const dropdown = createDropdownSelect(formType, (t) => {
    setFormType(t);
    reloadPage();
  });
  form.appendChild(dropdown);

  for (const [id, data] of Object.entries(formDataObject.fields)) {
    const div = document.createElement("div");
    div.classList.add("col-12");

    const overrides = data.overrides || {};

    const label = createLabel(id, data.hint, overrides);
    const input = createInput(id, data.hint, data.required, overrides);
    const error = createError(data.required, overrides);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(error);

    if (overrides.class !== null) div.classList.add(overrides.class);

    form.appendChild(div);
  }

  const submitButton = createSubmitButton();
  form.appendChild(submitButton);

  const padding = document.createElement("div");
  padding.style.height = "60px";
  form.appendChild(padding);

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (form.checkValidity()) sendFormData("steckbrief");
      form.classList.add("was-validated");
    },
    false
  );

  if (formType === "steckbrief") {
    const tokenReloadButton = createTokenReloadButton();
    document.getElementById("token-label").appendChild(tokenReloadButton);

    const tokenInput = document.getElementById("token");
    tokenInput.oninput = () => {
      const text = tokenInput.value.trim().toLowerCase();
      if (text.length >= 6 && text.length <= 20) {
        tokenReloadButton.classList.remove("visually-hidden");
      } else {
        tokenReloadButton.classList.add("visually-hidden");
      }
    };

    tokenReloadButton.onclick = async () => {
      try {
        const data = await getFormData();
        for (const [id, value] of Object.entries(data)) {
          document.getElementById(id).value = value;
        }
      } catch (e) {
        console.error(e);
      }
    };
  }
};

var globalFormType = "steckbrief";
const setGlobalFormType = (t) => (globalFormType = t);
export const reloadPage = () => loadPage(globalFormType, setGlobalFormType);
window.onload = reloadPage;
