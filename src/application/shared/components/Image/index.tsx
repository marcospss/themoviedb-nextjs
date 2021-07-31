import ImageNext from 'next/image';

import imageApi from '~/infrastructure/settings/imageApi';

type ImageProps = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string): string =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Image = ({ alt, height, src, width }: ImageProps): JSX.Element => {
  return src === null ? (
    <ImageNext
      width={width}
      height={height}
      layout="responsive"
      src="/images/image-default.png"
      alt={alt}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
    />
  ) : (
    <ImageNext
      width={width}
      height={height}
      layout="responsive"
      src={`${imageApi.secure_base_url}w${width}${src}`}
      alt={alt}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
    />
  );
};

export default Image;
