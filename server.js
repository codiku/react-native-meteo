const Expo = require("expo-server-sdk").default;
const expo = new Expo();

if (Expo.isExpoPushToken(token)) {
  expo.sendPushNotificationsAsync({
    to: "token",
    title: "Info météo",
    body: `Salut du serveur !`,
    data: { infos: "petites données" },
    sound: "default",
  });
}
