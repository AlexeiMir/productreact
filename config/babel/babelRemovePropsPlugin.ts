import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                // Массив атрибутов, которые хотим выпилить
                const forbidden = state.opts.props || [];

                // traverse - проходим по всем нодам дерева
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
