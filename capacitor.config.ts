import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'fr.cristalunion.suivignr',
  appName: 'Suivi GNR',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 600,
      launchAutoHide: true,
      backgroundColor: '#182420',
      androidScaleType: 'CENTER_INSIDE',
      showSpinner: false
    }
  }
};

export default config;