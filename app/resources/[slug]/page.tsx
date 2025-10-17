// app/resources/[slug]/page.tsx
import { getResource, getAllSlugs } from '../../../lib/mdx';
import Link from 'next/link';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllSlugs();
  return slugs.map((s) => ({ slug: s }));
}

type Props = { params: { slug: string } };

export default async function ResourcePage({ params }: Props) {
  const { html } = await getResource(params.slug);

  return (
    <div className="page active">
      <div className="resource-hero">
        <div className="container">
          <h1>{params.slug.replace('-', ' ').toUpperCase()}</h1>
          <p>Comprehensive guidance on UK {params.slug.replace('-', ' ')}</p>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/resources">Resources</Link><span>›</span>
            <span>{params.slug.replace('-', ' ')}</span>
          </div>
        </div>
      </div>

      <div className="resource-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="sidebar">
              <div className="sidebar-section">
                <h3>Quick Links</h3>
                <ul className="sidebar-links">
                  <li><a href="#">Tax Rates &amp; Allowances</a></li>
                  <li><a href="#">Calculators</a></li>
                  <li><a href="#">Loss Relief Options</a></li>
                </ul>
              </div>
              <div className="sidebar-section">
                <h3>Latest Updates</h3>
                <ul className="sidebar-links">
                  <li><a href="#">Budget changes</a></li>
                  <li><a href="#">HMRC guidance updates</a></li>
                  <li><a href="#">Recent case law</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
