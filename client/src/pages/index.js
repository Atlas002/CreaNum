//home page
import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';

export default function Home() {
  return (
    <Layout>
        <div className="text-center">
          <h1 className="wt-title-better ">
            Welcome to Anatomix
          </h1>
          <p className="mb-8 text-xl text-black-600">
            Discover the amazing nature of the human body.
          </p>
          <p className="mb-8 text-black-600">
            A Project brought to you by Arthur, Elise, Mathis and Virgile.
          </p>
          <LinkButton href = "/explore">
          Explore Now!
          </LinkButton>
        </div>
    </Layout>
  );
}
