import { createContext } from "react";
export interface LocaleContextType {
  locale: string;
}
const localeContext = createContext<LocaleContextType>({
  locale: "zh-CN", // 默认语言为英语
});
export default localeContext;
