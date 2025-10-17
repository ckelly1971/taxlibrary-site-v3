// lib/mdx.ts
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDir = path.join(process.cwd(), 'content');

export async function getAllSlugs(): Promise<string[]> {
  const files = await fs.readdir(contentDir);
  return files
    .filter((f) => f.toLowerCase().endsWith('.mdx') || f.toLowerCase().endsWith('.md'))
    .map((f) => f.replace(/\.(mdx|md)$/i, ''));
}

export async function getResource(slug: string): Promise<{ html: string; data: Record<string, unknown> }> {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf8');
  const { content, data } = matter(raw);
  const html = marked.parse(content) as string;
  return { html, data };
}
