import { getData } from '@/services/dataFetcher';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Detail | Hamzah Raihan',
  description: 'detailed project page',
};

async function DetailProjectPage({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const res = await getData(`http://localhost:3000/api/projects?slug=${slug}`);
  const projects = res.data;
  console.log('🚀 ~ DetailProjectPage ~ projects:', projects);
  return <div>DetailProjectPage</div>;
}

export default DetailProjectPage;
