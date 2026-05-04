import { useEffect } from "react";

const BASE_TITLE = "Dean Projekt Gradnja";

export function useDocumentMeta(title: string, description?: string) {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;

        let meta: HTMLMetaElement | null = null;
        let previousContent: string | null = null;

        if (description) {
            meta = document.querySelector('meta[name="description"]');
            if (!meta) {
                meta = document.createElement("meta");
                meta.setAttribute("name", "description");
                document.head.appendChild(meta);
            } else {
                previousContent = meta.getAttribute("content");
            }
            meta.setAttribute("content", description);
        }

        return () => {
            document.title = previousTitle;
            if (meta && previousContent !== null) {
                meta.setAttribute("content", previousContent);
            }
        };
    }, [title, description]);
}
