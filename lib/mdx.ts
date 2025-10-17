import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
const contentDir = path.join(process.cwd(), 'content');
export async function getAllSlugs() {
  const files = await fs.readdir(contentDir);
  return files.filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''));
}
export async function getResource(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf8');
  const { content } = matter(raw);
  const { content: mdx } = await compileMDX({ source: content });
  return { mdx };
}
