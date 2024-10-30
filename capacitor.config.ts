import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'QrApp',
  webDir: 'www',
  plugins: {
    CapacitorSQLite: {
      iosKeychainPrefix: 'tu_app_prefix'
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
