import { getResource, getAllSlugs } from '../../../lib/mdx';
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(s => ({ slug: s }));
}
export default async function ResourcePage({ params }) {
  const { mdx } = await getResource(params.slug);
  return <div><h2>{params.slug}</h2><div>{mdx}</div></div>;
}
