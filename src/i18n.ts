import { useAppSelector } from "./app/hooks";
import { RootState } from "./app/store";

export type Language = "English" | "Croatian";

export const useLang = () => {
    const language = useAppSelector(
        (state: RootState) => state.language.value
    ) as Language;
    const t = (eng: string, cro: string) => (language === "English" ? eng : cro);
    return { language, isEng: language === "English", t };
};
