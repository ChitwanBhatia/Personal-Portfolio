const isImage = (src: string) => /^(https?:\/\/|\/)/.test(src);

export default function Icon({ src }: { src: string }) {
  return isImage(src) ? <img className="icon-img" src={src} alt="" /> : <>{src}</>;
}