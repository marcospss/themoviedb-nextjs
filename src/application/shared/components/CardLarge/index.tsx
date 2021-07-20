import Link from 'next/link';
import ImageWrapper from '~/application/shared/components/ImageWrapper';
import { Card, Header, Overview } from './style';

type CardProps = {
  id: number;
  srcImage: string;
  title: string;
  overview: string;
  mediaType: string;
  displayOverview: boolean;
};

const CardLarge = ({
  id,
  displayOverview,
  srcImage,
  mediaType,
  overview,
  title,
}: CardProps): JSX.Element => {
  return (
    <Card>
      <Header>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>
            <ImageWrapper alt={title} height="100%" width="100%" src={srcImage} />
          </a>
        </Link>
        <h1>
          <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
            <a>{title}</a>
          </Link>
        </h1>
      </Header>
      <Overview hidden={displayOverview}>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>{overview}</a>
        </Link>
      </Overview>
    </Card>
  );
};

export default CardLarge;
