import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.ts',       // point d’entrée de ta lib
      name: 'ReactTypewriterLib',  // nom global pour UMD
      fileName: (format) => `react-typewriter.${format}.js`
    },
    rollupOptions: {
      // exclure React pour laisser la peerDependency
      external: ['react', 'react-dom'],
      output: {
        // mappings pour UMD
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
