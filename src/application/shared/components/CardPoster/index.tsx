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
          <a title={title}>
            <Image alt={title} height={136} width={92} src={src} />
          </a>
        </Link>
      </S.Poster>
      <S.Content>
        <S.Title>
          <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
            <a title={title}>{shortTitle}</a>
          </Link>
        </S.Title>
        <S.Overview>
          <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
            <a title={title}>{overview}</a>
          </Link>
        </S.Overview>
        <S.LearnMore>
          <Link href={`/${mediaType}/[mediaId]`} as={`/${mediaType}/${id}`}>
            <a title={title}>See the full content</a>
          </Link>
        </S.LearnMore>
      </S.Content>
    </S.Card>
  );
};
export default CardPoster;
