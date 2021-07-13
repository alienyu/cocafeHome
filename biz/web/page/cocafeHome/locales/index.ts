import { merge } from 'lodash';
import enUS from './en-US';
import zhCN from './zh-CN';
import zhTW from './zh-TW';
import commLocales from '@webLocales/index'; 

export default {
    'en-US': merge(enUS, commLocales.enUS),
    'zh-CN': merge(zhCN, commLocales.zhCN),
    'zh-TW': merge(zhCN, commLocales.zhTW)
}