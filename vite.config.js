import { defineConfig } from 'vite'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/',
  plugins: [
    {
      name: 'portfolio-pages',
      closeBundle() {
        const pages = [
          'about.html',
          'work.html',
          'education.html',
          'contact.html'
        ]

        for (const page of pages) {
          copyFileSync(
            resolve('dist/index.html'),
            resolve('dist', page)
          )
        }
      }
    }
  ]
}
)
