import Image from 'next/image'

export function LogoVisual() {
  return (
    <div className="w-full">
      <Image
        src="/hoshamane-logo.svg"
        alt="Hoshamane Properties Logo"
        width={200}
        height={100}
        className="w-auto h-auto"
      />
    </div>
  )
}
