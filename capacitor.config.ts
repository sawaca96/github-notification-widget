import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "widget-practice",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.0.161:8080/",
    cleartext: true,
  },
  plugins: {
    FirebaseAuthentication: {
      providers: ["github.com"],
    },
  },
};

export default config;
