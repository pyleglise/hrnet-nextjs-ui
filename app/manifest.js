export default function manifest() {
  return {
    name: 'HR-Net App',
    short_name: 'HR-Net',
    description: 'Employee management application',
    start_url: '/',
    scope: '/',
    background_color: '#bad5ff',
    theme_color: '#3a33a4',
    display: 'standalone',
    prefer_related_applications: false,

    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'any',
      },
      {
        src: '/icons-192.png',
        sizes: '192x192',
        purpose: 'any',
      },
      {
        src: '/icons-512.png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  }
}
