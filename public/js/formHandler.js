import { collection, doc, firestore, getDocument, setDocument, signIn } from "./firebase.js";
import { formData } from "./formData.js";

export const createTitle = (title) => {
  const titleElement = document.createElement("h2");
  titleElement.innerHTML = title;
  return titleElement;
};

export const createSubtitle = (subtitle) => {
  const subtitleElement = document.createElement("p");
  subtitleElement.id = "subtitle-text";
  subtitleElement.innerHTML = subtitle;
  return subtitleElement;
};

export const createLabel = (id, hint, overrides) => {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.classList.add("form-label");
  label.innerText = hint;
  if (overrides.labelId !== null) label.id = overrides.labelId;
  return label;
};

export const createInput = (id, hint, required, overrides) => {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", id);
  input.setAttribute("class", "form-control");
  input.setAttribute("placeholder", hint);
  if (required) input.setAttribute("required", "true");
  if (overrides.type !== null) input.setAttribute("type", overrides.type);
  return input;
};

export const createError = (required, overrides) => {
  if (!required) return document.createElement("div");
  const error = document.createElement("div");
  error.classList.add("invalid-feedback");
  error.innerText = overrides.error || "Bitte gib eine Antwort ein.";
  return error;
};

export const createSubmitButton = () => {
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("class", "btn btn-primary");
  submitButton.innerText = "Speichern";
  return submitButton;
};

export const createTokenReloadButton = () => {
  const tokenReloadButton = document.createElement("span");
  tokenReloadButton.id = "token-reload-button";
  tokenReloadButton.classList.add("visually-hidden");
  tokenReloadButton.innerHTML = '<img src="reload.svg" />';
  tokenReloadButton.style.cursor = "pointer";
  tokenReloadButton.style.fontFamily = "unset";
  return tokenReloadButton;
}

const getEntryDataDocument = () => {
  const token = formValue("token").trim().toLowerCase();
  const entryDataCollection = collection(firestore, "entrydata");
  return doc(entryDataCollection, token);
};

export const getFormData = async () => {
  await signIn();
  const snapshot = await getDocument(getEntryDataDocument());
  if (snapshot.exists) return snapshot.data();
  else return {};
};

const formValue = (key) => {
  console.log(key);
  return document.getElementById(key).value.trim();
};

export const sendFormData = async (type) => {
  await signIn();
  if (type === "steckbrief") {
    const keys = Object.keys(formData[type].fields);
    keys.splice(keys.indexOf("token"), 1);
    const data = {};
    keys.forEach((key) => (data[key] = formValue(key)));
    await setDocument(getEntryDataDocument(), data);

    document.querySelector("form").innerHTML = "";
    document.getElementById("subtitle-text").innerText =
      "Deine Daten wurden gespeichert.";
  } else if (type === "artikel") {
    // TDOD: implement
  }
};
