import React, { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface CodeHighlightProps {
    code: string;
    language?: string;
    theme?: string;
}

// Define CSS para garantir alinhamento à esquerda do código
const customStyles = `
.shiki {
  text-align: left;
  padding: 1rem;
  margin: 0;
  width: 100%;
}
.shiki code {
  display: block;
  text-align: left;
}
.shiki .line {
  text-align: left;
  min-height: 1.5em;
}
`;

export const CodeHighlight: React.FC<CodeHighlightProps> = ({
    code,
    language = 'tsx',
    theme = 'vitesse-dark'
}) => {
    const [html, setHtml] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const highlightCode = async () => {
            try {
                const highlighted = await codeToHtml(code, {
                    lang: language,
                    theme: theme,
                });
                setHtml(highlighted);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to highlight code:', error);
                setIsLoading(false);
            }
        };

        highlightCode();
    }, [code, language, theme]);

    if (isLoading) {
        return (
            <div className="bg-gray-900 text-gray-300 p-4 rounded-md overflow-x-auto text-sm animate-pulse">
                Carregando syntax highlighting...
            </div>
        );
    }

    return (
        <>
            <style>{customStyles}</style>
            <div
                className="rounded-md overflow-x-auto text-sm text-left w-full"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </>
    );
};