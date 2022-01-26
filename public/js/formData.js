const nameTokenData = {
  vorname: {
    hint: "Vorname",
    required: true,
    overrides: {
      class: "col-sm-4",
      error: "Bitte gib einen Vornamen ein.",
    },
  },
  token: {
    hint: "Token",
    required: true,
    overrides: {
      class: "col-sm-4",
      type: "password",
      labelId: "token-label",
      error: "Bitte gib einen Token ein.",
    },
  },
};

export const formData = {
  steckbrief: {
    header: {
      title: "Formular zur Abizeitung",
      subtitle: "Auf dieser Seite sollen Textfelder ausgefüllt werden, um die für jeden Schüler benötigten Daten sammeln zu können.<br /><b>Bitte bedenke, dass deine Antworten nicht zu lang sein sollten.</b>",
    },
    fields: {
      ...nameTokenData,
      geburtsdatum: {
        hint: "Geburtsdatum",
        required: true,
        overrides: {
          class: "col-sm-4",
          type: "date",
          error: "Bitte gib ein Geburtsdatum an.",
        },
      },
      spitznamen: {
        hint: "Spitzname/n",
        required: false,
      },
      wohnort: {
        hint: "Wohnort",
        required: true,
      },
      plan: {
        hint: "Plan/Pläne nach dem Abi",
        required: false,
      },
      motto: {
        hint: "Lebensmotto",
        required: false,
      },
      lieblingsfach: {
        hint: "Lieblingsfach/fächer",
        required: true,
      },
      hassfach: {
        hint: "Hassfach",
        required: true,
      },
      "ohne-das": {
        hint: "Ohne … hätte ich die Schulzeit nicht überstanden",
        required: true,
      },
      // insgeheime trennung
      songtipp: {
        hint: "Mein geheimer Songtipp",
        required: false,
      },
      lieblingsgetraenke: {
        hint: "Lieblingsgetränk/e (anti-)alkoholisch",
        required: false,
      },
      gewinnen: {
        hint: "Dabei gewinne ich immer",
        required: false,
      },
      "zu-oft": {
        hint: "Das sage ich zu oft",
        required: true,
      },
      "langweiliges-buch": {
        hint: "Langweiligstes Buch aus der Schulzeit",
        required: true,
      },
      abwesenheitsgrund: {
        hint: "Häufigster Abwesenheitsgrund",
        required: true,
      },
      gelernt: {
        hint: "Das habe ich in meiner Schulzeit gelernt",
        required: true,
      },
      vermissen: {
        hint: "Das werde ich an der Schulzeit vermissen",
        required: false,
      },
      tipplehrer: {
        hint: "Mein Tipp an die Lehrer",
        required: true,
      },
      "ratschlag-schueler": {
        hint: "Mein Ratschlag an die Schüler des Gympegs",
        required: false,
      },
    },
  },
};
