import { ENV_VARIABLES } from "./index";

export let ENV_LOCAL: ENV_VARIABLES = {
    APP_ENV: "local",
    API_BASE: "https://azureapiqa.masholdings.com/noyonportalapiqa",
    // API_BASE: "https://localhost:7008",
    AUTHORITY: "https://login.microsoftonline.com/852c5799-8134-4f15-9d38-eba4296cc76f",
    // CLIENT_ID: "fb48f0a1-710f-4bf3-b86f-db6945fead21",
    CLIENT_ID: "b42b3abc-7de9-4701-976a-30463af6d308",
    REDIRECT_URL: "http://localhost:3000",
    POST_REDIRECT_URL: "http://localhost:3000",
    APP_SCOPES: ["openid"],
    APIM_SUBSCRIPTION_KEY: '045bd2c213c04e74838ce7b76eafccd8'
};
