import Link from 'next/link';
import Image from '~/application/shared/components/Image';
import { Card, Header, Overview } from './style';

type CardProps = {
  id: number;
  srcImage: string;
  title: string;
  overview: string;
  mediaType: string;
  displayOverview: boolean;
  width: number;
  height: number;
};

const CardLarge = ({
  id,
  displayOverview,
  srcImage,
  mediaType,
  overview,
  title,
  height,
  width,
}: CardProps): JSX.Element => {
  return (
    <Card>
      <Header>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>
            <Image alt={title} height={height} width={width} src={srcImage} />
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
