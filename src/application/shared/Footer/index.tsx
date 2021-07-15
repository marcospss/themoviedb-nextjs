import { Container } from './styles';

export default function Footer(): JSX.Element {
  return (
    <Container>
      <p>
        <strong>Let&apos;s talk about TMDb</strong> The Movie Database (TMDb) is a community built
        movie and TV database.
      </p>
      <p>
        <a
          href="https://www.themoviedb.org/account/signup"
          target="_blank"
          rel="noopener noreferrer">
          <b>Sign up for an account</b>
        </a>
      </p>
    </Container>
  );
}
