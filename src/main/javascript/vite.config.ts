import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "node:path";
import type { UserConfig } from 'vite'

export default defineConfig(({command}) => {
    let config = {
        plugins: [react()],
        ssr: {
            noExternal: true,
            target: 'webworker'
        },

        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },

        build: {
            rollupOptions: {
                input: {
                    index: path.resolve('./src/entrypoints/entry-client.tsx'),
                }
            }
        }
    } satisfies UserConfig

    if (command == "serve") {
        //@ts-ignore
        delete config.ssr
    }

    return config
})
