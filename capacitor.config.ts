import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'capybara',
  webDir: 'www',
  server: {
    allowNavigation: ["www.youtube.com", "youtube.com", "https://www.youtube.com"],
    cleartext: true
  }
};

export default config;
