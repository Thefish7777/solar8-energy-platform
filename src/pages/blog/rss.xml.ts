import { blogPosts } from "../../data/blog";

export const GET = ({ site }: { site: URL | undefined }) => {
    const base = site ?? new URL("https://solar8.co.za");
    const items = blogPosts.map((post) => `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${new URL(`/blog/${post.slug}/`, base).toString()}</link>
            <guid>${new URL(`/blog/${post.slug}/`, base).toString()}</guid>
            <description><![CDATA[${post.description}]]></description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Solar8 Blog</title>
        <link>${new URL("/blog/", base).toString()}</link>
        <description>Solar advice and energy guides from Solar8.</description>
        <language>en-ZA</language>
        ${items}
    </channel>
</rss>`;

    return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
