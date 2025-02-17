/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://suleormedellalfierenero.pusi77.eu.org',
  avatar: '/avatar.jpg',
  title: 'Sulle orme dell\'Alfiere Nero',
  description: 'Un gruppo di ragazzi alla ricerca del famigerato Alfiere Nero. Queste sono le loro avventure.',
  lastModified: false,
  readTime: true,
  footer: {
    copyright: 'C\'est en faisant n\'importe quoi qu\'on devient n\'importe qui',
  }
});
