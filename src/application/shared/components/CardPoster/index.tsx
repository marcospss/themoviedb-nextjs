import Link from 'next/link';
import Image from '~/application/shared/components/Image';
import * as S from './styles';

type CardProps = {
  id: number;
  src: string;
  title: string;
  overview: string;
  mediaType: string;
  hideOverflowTitle: boolean;
};

const CardPoster = ({
  id,
  src,
  title,
  overview,
  mediaType,
  hideOverflowTitle,
}: CardProps): JSX.Element => {
  const shortTitle =
    title.length > 28 && hideOverflowTitle ? `${title.substring(0, 28)}...` : title;
  return (
    <S.Card>
      <S.Poster>
        <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
          <a>
            <Image alt={title} height={136} width={92} src={src} />
          </a>
        </Link>
      </S.Poster>
      <S.Content>
        <S.Title>{shortTitle}</S.Title>
        <S.Overview>{overview}</S.Overview>
        <S.LearnMore>
          <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
            <a>Learn More</a>
          </Link>
        </S.LearnMore>
      </S.Content>
    </S.Card>
  );
};
export default CardPoster;
