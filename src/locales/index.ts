import { createI18n } from 'vue-i18n'
import en from './en'
import zhCN from './zh-CN'

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'zhCN',
  legacy: false,
  globalInjection: true,
  messages: {
    zhCN,
    en
  }
})

export default i18n