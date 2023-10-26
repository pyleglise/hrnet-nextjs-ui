/**
 * Generates a sitemap for the application.
 * @namespace
 * @returns {Array<Object>} An array of objects, each representing a URL entry for the sitemap.
 */
const sitemap = () => {
  const baseUrl = 'https://hrnet.axialdata.app'
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/employees`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/employee/new`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}

export default sitemap
