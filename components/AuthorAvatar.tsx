import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://picsum.photos/id/237/96'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-xl font-bold text-balance">{name}</div>
    </div>
  )
}
