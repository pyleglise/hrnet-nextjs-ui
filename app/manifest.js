export default function manifest() {
  return {
    name: 'HR-Net App',
    short_name: 'HR-Net',
    description: 'Employee management application',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}