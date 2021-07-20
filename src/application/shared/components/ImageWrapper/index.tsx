// import Image, { ImageLoader } from 'next/image';

type ImageProps = {
  alt: string;
  height: number | string;
  src: string;
  width: number | string;
};

// const myLoader = (src: string): ImageLoader | string => {
//   return `https://image.tmdb.org/t/p/w780${src}`;
// };

const ImageWrapper = ({ alt, height, src, width }: ImageProps): JSX.Element => {
  return (
    // <Image
    //   loader={myLoader(src)}
    //   width={width}
    //   height={height}
    //   layout="responsive"
    //   src="/images/image-default.png"
    //   alt={alt}
    //   placeholder="blur"
    // />
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} />
  );
};

export default ImageWrapper;
