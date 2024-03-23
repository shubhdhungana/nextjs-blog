import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
{/*       <section className={utilStyles.headingMd}>
        <p>Subham Dhungana this side! Currently doing full stack with elevation towards mern stack, next js and having affair with cyber security</p>
        <p>
          Here's my cv {' '}
          <a target="_blank" href="https://docs.google.com/document/d/1YX1_2CttJRnuBXeDM7ZyspJsMmIZrzcnakrekxNrNWQ/edit?tab=t.0#heading=h.wcomgxepm8sk">My CV</a>.)
        </p>
      </section> */}

      <section className={`${utilStyles.headingMd} custom-section`}>
  <p className="intro-text">Subham Dhungana here! Currently diving deep into full stack development with a focus on MERN stack and Next.js, while also exploring the fascinating world of cybersecurity.</p>
  <p>
    Here's my <a target="_blank" href="https://docs.google.com/document/d/1YX1_2CttJRnuBXeDM7ZyspJsMmIZrzcnakrekxNrNWQ/edit?tab=t.0#heading=h.wcomgxepm8sk">CV</a>.
  </p>
  <style jsx>{`
    .custom-section {
      background-color: #f8f9fa; /* Light gray background */
      padding: 20px; /* Add some padding */
      border-radius: 10px; /* Add border radius for rounded corners */
    }

    .intro-text {
      font-size: 18px; /* Increase font size */
      font-weight: bold; /* Make the text bold */
      margin-bottom: 20px; /* Add some bottom margin */
    }

    a {
      color: #007bff; /* Blue color for the link */
      text-decoration: none; /* Remove default underline */
    }

    a:hover {
      text-decoration: underline; /* Underline the link on hover */
    }
  `}</style>
</section>



      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
