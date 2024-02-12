
const LeftSidebar = () => {
    return (
        <section className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full overflow-hidden max-sm:hidden select-none bg-primary-grey-200">
        <div className="flex flex-col grow pt-3 pb-12 mx-auto w-full rounded-none backdrop-blur-[96.13656616210938px]">
          <div className="flex gap-5 justify-between self-center max-w-full text-sm whitespace-nowrap w-[227px]">
            <div className="flex gap-4 justify-between">
              <div className="text-stone-300">Layers</div>
              <div className="text-zinc-600">Assets</div>
            </div>
            <div className="flex gap-1.5 my-auto text-stone-300">
              <div>Cover</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1dac6199da461cf3187f1a106576cf734518d3c8cc2b45ada3ba055be0ffea?apiKey=9d5288e79637410082758b8e17dd917a&"
                className="self-start w-2.5 aspect-[1.67] fill-stone-300 stroke-[2px] stroke-white"
              />
            </div>
          </div>
          <div className="shrink-0 mt-3 h-px bg-neutral-600" />
          <div className="flex gap-2 justify-between px-4 py-2 mt-4 backdrop-blur-[96.13656616210938px] bg-sky-500 bg-opacity-10">
            <div className="flex gap-0 justify-between">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                className="w-4 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674ff48022929f90e8e3aab1c8cae6ed7c8cf9d08c0a53d30b63d1ecb99eb33?apiKey=9d5288e79637410082758b8e17dd917a&"
                className="w-4 aspect-square"
              />
            </div>
            <div className="flex-auto my-auto text-xs font-semibold tracking-normal leading-4 text-white">
              Frame 1
            </div>
          </div>
          <div className="flex flex-col pr-14 pl-4 mt-2 max-md:pr-5">
            <div className="flex gap-0 justify-between text-xs font-semibold tracking-normal leading-4 text-white whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                className="w-4 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674ff48022929f90e8e3aab1c8cae6ed7c8cf9d08c0a53d30b63d1ecb99eb33?apiKey=9d5288e79637410082758b8e17dd917a&"
                className="w-4 aspect-square"
              />
              <div className="grow">Top-level frame</div>
            </div>
            <div className="flex gap-5 justify-between mt-4">
              <div className="flex flex-col">
                <div className="flex gap-2 ml-4 text-xs tracking-normal leading-4 text-white whitespace-nowrap w-[49px] max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54df4aa1e4d3755e1474c6d455de15b552b546ec496d671a75aa9893a43696ed?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                  <div className="my-auto">Hello</div>
                </div>
                <div className="flex gap-2 justify-between mt-4">
                  <div className="flex gap-0 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc6ee3a4e69e71bf79d4ef54295c0aac7ab6cbb3c139825b1adac6c665e22cf?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                  </div>
                  <div className="my-auto text-xs tracking-normal leading-4 text-white">
                    Labels
                  </div>
                </div>
                <div className="flex gap-0 justify-between mt-4 text-xs font-semibold tracking-normal leading-4 text-violet-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bcfe4674781972c348cb3bab14827526f9293488d9a3e8df8a0a597219cc8a5?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <div className="self-start mt-1.5">Button / active</div>
                </div>
                <div className="flex gap-0 justify-between mt-4 text-xs font-semibold tracking-normal leading-4 text-white">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5fdb2c6502cb4785e8de13d834df2b7fdc324da54a19df3d687d54c598a1a3?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2674ff48022929f90e8e3aab1c8cae6ed7c8cf9d08c0a53d30b63d1ecb99eb33?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <div className="my-auto">Dark Mode</div>
                </div>
                <div className="flex flex-col items-center pl-4 mt-4 text-xs tracking-normal leading-4 text-white">
                  <div className="flex gap-2 justify-between self-stretch text-violet-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3471d3165e97e0576296b9411e8c309f4e28cbedad9ad40dffcf4200ea285b98?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <div>Logo / Figma</div>
                  </div>
                  <div className="flex gap-2 mt-4 w-[79px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41df36979b6dbfc89c26e27960d27310b79022d01f3cd4e5f0bdc510ca5c0a2?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <div className="my-auto">Line Green</div>
                  </div>
                  <div className="flex gap-2 mt-4 w-[79px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/780c9fcde514f8b34aaa46ceaceb15cd3c7fd305bf13d17df8dc38ae33460249?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <div>Ellipse Red</div>
                  </div>
                </div>
                <div className="flex gap-2 justify-between mt-4">
                  <div className="flex gap-0 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bc6ee3a4e69e71bf79d4ef54295c0aac7ab6cbb3c139825b1adac6c665e22cf?apiKey=9d5288e79637410082758b8e17dd917a&"
                      className="w-4 aspect-square"
                    />
                  </div>
                  <div className="text-xs tracking-normal leading-4 text-white">
                    Group 2
                  </div>
                </div>
                <div className="flex gap-0 justify-between mt-4 text-xs tracking-normal leading-4 text-violet-500">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2053257c31b2f6474381d99aac1fd1833afcde92df0f9d828115c2073cea4a1c?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cfd2361d0130f64c59a77c9a61fcaad28a98b64fa8f5e1da27a8c5a3712557?apiKey=9d5288e79637410082758b8e17dd917a&"
                    className="w-4 aspect-square"
                  />
                  <div className="self-start mt-1.5">Button / active</div>
                </div>
              </div>
              <div className="flex flex-col items-center self-end mt-32 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b09c3422c5165bce07cdafa4f1bf77d565d0ccecc45a426ae044d7a0cd3b4a?apiKey=9d5288e79637410082758b8e17dd917a&"
                  className="w-4 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88976ed053849fee21d4520a3e8cf7f6dd08e46378162d037e79a76b9435039?apiKey=9d5288e79637410082758b8e17dd917a&"
                  className="mt-28 w-4 aspect-square max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default LeftSidebar