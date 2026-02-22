import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://speedboatour.in',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add more pages here as your site grows
        // {
        //   url: 'https://speedboatour.in/about',
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ]
}
