import LiveAvatars from "@/components/users/liveAvatar"

const Navbar = () => {
  return (
    <nav className="flex relative overflow-hidden top-0 gap-2 z-[9999] justify-between px-4 w-full fill-neutral-800 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc5c308553ffb3e27d60c81792712946e1301ae9a2c58055532e12b1e73cd96?apiKey=9d5288e79637410082758b8e17dd917a&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-0 justify-between">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a675932b600ca3bce6718e820c54eb0a606b2967bb6b7785451301216a546deb?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="my-auto w-4 aspect-square"
          />
          <div className="flex backdrop-blur-[96.13656616210938px] bg-sky-500 bg-opacity-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1502ca2d66b3d67cbc65f9309bfa4ab78cdc2eb7ef1eae8457d3a79940ff1c?apiKey=9d5288e79637410082758b8e17dd917a&"
              className="w-14 aspect-[1.16]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe972ced08f4012a2939edfb9ee268d32b0d847b748c03ae98eb7d4c72c185f6?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="w-14 aspect-[1.16]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b37470765ee1fcb6f6f567849bad174ebf9925a357202674959d6a7d7d9b8aa2?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="w-14 aspect-[1.16]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e10a22392064337927b79a87e5971501987b71ff431171777fd7ecfd1a859b1?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ced2c6de9c776220c8e3683c57dcf1bb919b84505b7485b5e96f4307724df34?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="w-12 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b596fbe88a40d406c09490da3217973e5e05442bb27ea24d4d82877c5460d5bd?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="w-12 aspect-square"
          />
        </div>
        <div className="flex relative gap-1.5 my-auto text-sm font-medium whitespace-nowrap text-stone-300">
          <div className="grow">
            <span className="text-zinc-500">Drafts /</span> Figma Dark Mode
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/081e0fa427a2ff988ac4664c39fe4689e40d51ef266a8569c74e99c022bcbc9d?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="self-start w-3 aspect-square"
          />
        </div>
        <div className="flex relative gap-1 justify-between items-center my-auto text-sm font-medium whitespace-nowrap text-stone-300">
          <div className="py-2">
          <LiveAvatars />
          </div>
          <div className="self-stretch my-auto">Share</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fefd30c0eb444919671c8ac800601747cbb337b58f7368978969ecf3b4e1fa07?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="self-stretch my-auto w-4 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9de8f30c4c0d80c0a00b04b7563e417ae1a89c119ae09746b5dcdf33e0a92f2f?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="self-stretch my-auto w-4 aspect-square"
          />
          <div className="self-stretch my-auto">100%</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/081e0fa427a2ff988ac4664c39fe4689e40d51ef266a8569c74e99c022bcbc9d?apiKey=9d5288e79637410082758b8e17dd917a&"
            className="self-stretch my-auto w-3 aspect-square"
          />
        </div>
      </nav>
  )
}

export default Navbar