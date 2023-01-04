const Expo = require("expo-server-sdk").default;
const expo = new Expo();

const TOKEN = "ExponentPushToken[PPIMV_M4SdsxotdAl3_YS1]";
if (Expo.isExpoPushToken(TOKEN)) {
  expo.sendPushNotificationsAsync([
    {
      to: TOKEN,
      title: "Info météo",
      body: `Salut du serveur !`,
      data: { infos: "1" },
      sound: "default",
    },
  ]);
}
