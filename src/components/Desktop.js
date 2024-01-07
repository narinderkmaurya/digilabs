import * as React from "react";

function Desktop(props) {
  return (
    <>
      <div className="items-stretch bg-white flex flex-col">
        <div className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-2 border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="justify-center items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
            <div className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-1000,#E6E7E9)] bg-zinc-100 px-2 py-1 rounded-[240px] border-solid">
              Announcement
            </div>
            <div className="text-neutral-900 text-center text-sm font-medium leading-5 self-center grow my-auto max-md:max-w-full">
              We are hDesktopy to announce that we raise $2 Million in Seed Funding
            </div>
          </div>
        </div>
        <div className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-5 border-b border-solid max-md:max-w-full max-md:px-5">
          <div className="justify-between items-center flex w-[1216px] max-w-full gap-5 pl-4 py-0.5 max-md:flex-wrap">
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden shrink-0 max-w-full my-auto"
            />
            <div className="items-stretch self-stretch flex justify-between gap-5 p-2 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch flex justify-between gap-2">
                <div className="text-zinc-700 text-center text-base font-medium leading-5 grow whitespace-nowrap">
                  Card access
                </div>
                <img alt="" 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b96c87e1c583562ec03acddba4eba092738460720b3d0258c825c6ff4ce8662?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </div>
              <div className="text-zinc-700 text-center text-base font-medium leading-5">
                Banking
              </div>
              <div className="text-zinc-700 text-center text-base font-medium leading-5">
                Processing
              </div>
              <div className="text-zinc-700 text-center text-base font-medium leading-5">
                About
              </div>
              <div className="text-zinc-700 text-center text-base font-medium leading-5">
                Carrier
              </div>
              <div className="text-zinc-700 text-center text-base font-medium leading-5 whitespace-nowrap">
                Contact
              </div>
            </div>
            <div className="justify-between items-stretch bg-zinc-100 self-stretch flex gap-2 px-4 py-2 rounded-lg">
              <div className="text-gray-500 text-center text-base font-medium leading-5">
                Login
              </div>
              <img alt="" 
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/103f5c9b3d64c741dd9339d20a5116062eba0e7028fb8d4f6320730a12def201?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center bg-[url(https://cdn.builder.io/api/v1/image/assets%2F6eecde7a29ee4cb9abef5e4d0032874f%2F67c723e2298c4b0cb626b36176036925)] bg-no-repeat bg-center bg-cover pt-12 px-20 max-md:max-w-full max-md:px-5">
          <div className="text-fuchsia-900 text-center text-base font-medium leading-5 mt-11 max-md:max-w-full max-md:mt-10">
            Seamless experience
          </div>
          <div className="text-neutral-900 text-center text-6xl font-semibold leading-[72px] max-w-[832px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Unleashing the Next Generation of Card Solutions
          </div>
          <div className="text-gray-500 text-center text-lg leading-7 max-w-[648px] mt-4 max-md:max-w-full">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </div>
          <div className="justify-center items-stretch bg-fuchsia-900 flex gap-2 mt-8 p-4 rounded-lg">
            <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
              Unlock your Card
            </div>
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb1ff7f70cf277947e1ddadae7cb348bb463e7266d4d8b02ec9c415ea5822a4d?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-gray-500 text-center text-sm font-medium leading-5 mt-4 max-md:max-w-full">
            *No credit card required
          </div>
        </div>
        <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="justify-between items-stretch flex w-full max-w-[1216px] gap-5 my-12 p-2 max-md:max-w-full max-md:flex-wrap max-md:my-10">
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/90e0ce30270b0c03ad37d252c0ed885f28327f0b62ced6d690c4901aeb890575?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[4.08] object-contain object-center w-[98px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f4ade4dbeef3bc3da4ceca6eeacc7eebd01182877152f1a464a368e6d355da?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[2.83] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cafa776f2ba98efebf73ea029aa6cfad20355d1a5ed3ab90c1d3bd969c13f97b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[5.17] object-contain object-center w-[124px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/013cd565398f6e016c0812ee9ca7af97c94132731a5d8b80801bcb05e4073419?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[4.42] object-contain object-center w-[106px] overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dbf5fa1d33a8f41ef6729b34ecf78e91c65f57a626901089b2fd07d8a3d30e0?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dfbe4edb79f70df430496ab8b4e72ea53dac1c5a98c8fc0296eefc3340b7c94?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[5] object-contain object-center w-[120px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa71f46f37d5249231ac5160f4b16bb2f647cf6c72c78be34a4a3518850e55f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[4.25] object-contain object-center w-[102px] overflow-hidden shrink-0 max-w-full"
            />
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75ee4bbb794298d9cee157d93682b46b9ba5cf38652545702be5fb7de39e3f69?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-[5.5] object-contain object-center w-[132px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
        <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
          <div className="self-center text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
            Elevating Card Programs with Cutting-Edge Technology
          </div>
          <div className="text-gray-500 text-center text-lg leading-7 self-center max-w-xl mt-4 max-md:max-w-full">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
            <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
              Compare all Pro features
            </div>
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa1e525bd9dd08b8cd09f84913c8282d8d67df47c5ba8db47b28823b3cf11117?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="self-stretch mt-24 mb-12 mx-8 p-4 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                    <img alt="" 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e80e8428e9f42522e20be5b38d0ba8ef7b90061d24f583f37e82a17be71bed17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Globally Accepted
                  </div>
                  <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                    <img alt="" 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6620d4d405cb2efd02e93a2523b96c20d4edf4c430e8a09a91ce7d1db014bc5e?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Biometric Integrated
                  </div>
                  <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-10">
                  <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                    <img alt="" 
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f31eaf30807de0cbf59759cd490e7bdf6e3f5f81c205b23435d2c46d90f4198?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Fully Secured
                  </div>
                  <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
          <div className="self-center text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
            Elevating Card Programs with Cutting-Edge Technology
          </div>
          <div className="text-gray-500 text-center text-lg leading-7 self-center max-w-xl mt-4 max-md:max-w-full">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
            <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
              Compare all Pro features
            </div>
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3a5cc54dbf149137c3431d30c7fe5f47c163b5b98daf31c5b4004282c40202?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="self-stretch mt-24 mb-12 mx-8 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <img alt="" 
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                  className="aspect-[1.21] object-cover object-[top_left] w-full items-center overflow-hidden grow rounded-lg max-md:max-w-full max-md:mt-8"
                />
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-slate-50 flex grow flex-col w-full px-16 py-12 rounded-lg items-end max-md:max-w-full max-md:mt-8 max-md:px-5">
                  <div className="justify-center items-center border bg-white flex w-[409px] max-w-full flex-col mr-4 mt-16 mb-9 p-7 rounded-xl border-solid border-purple-400 max-md:mr-2.5 max-md:mt-10 max-md:px-5">
                    <div className="items-stretch self-stretch flex justify-between gap-5">
                      <div className="items-stretch flex flex-col">
                        <div className="text-neutral-900 text-xl font-semibold leading-6 whitespace-nowrap">
                          Spending
                        </div>
                        <div className="items-stretch flex justify-between gap-1.5 mt-1.5">
                          <img alt="" 
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c93978cb2ea70a0837e081096c58821f9584d6e217314604fcc3fa2c4559ae1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                            className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                          />
                          <div className="text-gray-500 text-sm font-medium leading-4 grow whitespace-nowrap self-start">
                            9349 visa card
                          </div>
                        </div>
                      </div>
                      <img alt="" 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa93416f943b8971ed1713dc9b736f8f9f5b1316926c8cab6ff8e96122b4b26b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                      />
                    </div>
                    <div className="items-stretch flex gap-2.5 mt-7 self-start">
                      <div className="text-neutral-900 text-3xl font-medium leading-10 grow whitespace-nowrap">
                        127.14
                      </div>
                      <div className="text-neutral-900 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">
                        USD
                      </div>
                    </div>
                    <div className="items-stretch self-stretch flex justify-between gap-5 mt-2.5">
                      <div className="text-gray-500 text-sm font-medium leading-4 whitespace-nowrap">
                        vs last week
                      </div>
                      <div className="text-gray-500 text-sm font-medium leading-4 grow whitespace-nowrap">
                        Last Purchased ( Feb 24 19:59 UTC-5 )
                      </div>
                    </div>
                    <div className="self-stretch flex items-stretch justify-between gap-5 mt-9 pr-12 max-md:pr-5">
                      <div className="text-gray-500 text-sm font-medium leading-4">
                        400 USD
                      </div>
                      <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                        1000 USD
                      </div>
                      <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                        5000 USD
                      </div>
                    </div>
                    <div className="items-stretch self-stretch flex gap-1 mt-3 pr-1.5">
                      <div className="bg-fuchsia-900 flex w-[102px] shrink-0 h-3 flex-col rounded-xl" />
                      <img alt="" 
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f0762baa6a07cba109b8579f8e8ef7fdb71fea1b14e5ea267071dcf33af211?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                        className="aspect-[11.83] object-contain object-center w-[142px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="bg-gray-200 flex w-[102px] shrink-0 h-3 flex-col rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1216px] my-12 p-4 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                    2 Million
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Customers
                  </div>
                  <div className="text-gray-500 text-center text-base leading-7 mt-2">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                    1K
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Downloads
                  </div>
                  <div className="text-gray-500 text-center text-base leading-7 mt-2">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                    $73 Million
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Transaction
                  </div>
                  <div className="text-gray-500 text-center text-base leading-7 mt-2">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                  <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                    2.0
                  </div>
                  <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Latest Version
                  </div>
                  <div className="text-gray-500 text-center text-base leading-7 mt-2">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
          <img alt="" 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb30a431b5267aa4fc8cf351e505c7dc69dab606c221c48c338bf15577db1675?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden max-w-full mt-20 max-md:mt-10"
          />
          <div className="text-zinc-800 text-center text-3xl font-medium leading-10 max-w-[824px] mt-8 max-md:max-w-full">
            I had the pleasure of experiencing the next generation of card
            solutions with this incredible product. It's refreshing to see such
            innovation in the financial industry.
          </div>{" "}
          <img alt="" 
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-16 justify-center items-center overflow-hidden max-w-full mt-12 max-md:mt-10"
          />{" "}
          <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Nick Babich
          </div>{" "}
          <div className="text-gray-500 text-center text-sm leading-5 whitespace-nowrap mt-1">
            Lead Designer
          </div>{" "}
          <div className="items-stretch flex w-[100px] max-w-full gap-3 mt-4 mb-14 max-md:mb-10">
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/31a8e59d497b282021ad1c8f39e618763b6286a4de66a9f469862cce1bb81b17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/669b5cd5c697d9f32414e42b6b1fd238a80935cf36ce66d12650c0ab896a3201?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d6785df7da0a82c8e3b4959d29b61de9911be428db7bc9c2c2e096a7839bb9?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9218f379bcb4e01c5b0e9eb81d0cc153ca94d91f1abef46b90890ca21b6a6900?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
          </div>
        </div>{" "}
        <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
            Unlock Limitless Possibilities with Our New Card Solutions
          </div>{" "}
          <div className="justify-center items-center self-stretch flex flex-col mt-8 mb-12 mx-8 px-16 max-md:max-w-full max-md:mr-2.5 max-md:mb-10 max-md:px-5">
            <div className="flex items-stretch gap-2">
              <div className="justify-between items-stretch bg-fuchsia-900 flex gap-2 px-4 py-3 rounded-lg">
                <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
                  Unlock your card
                </div>{" "}
                <img alt="" 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f2263679f65016f0b84928de1d1291e59abaf85b2fcd120da08a17081264b9b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </div>{" "}
              <div className="justify-between items-stretch bg-zinc-100 flex gap-2 px-4 py-3 rounded-lg">
                <div className="text-gray-500 text-center text-base font-medium leading-5 grow whitespace-nowrap">
                  Customer support
                </div>{" "}
                <img alt="" 
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f78a46baa08d204a90733d7ff2660ad1e0a52b2bc81190c6b87500f7b16a4c5?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-20 py-11 border-t border-solid max-md:max-w-full max-md:px-5">
          <img alt="" 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
          />{" "}
          <div className="self-center text-gray-500 text-center text-base font-medium leading-7 max-w-lg mt-5 max-md:max-w-full">
            Mode UI is a comprehensive design system that empowers designers and
            developers to create cohesive and visually stunning user interfaces
            across various platforms and devices
          </div>{" "}
          <div className="bg-zinc-100 self-stretch w-full shrink-0 h-px mt-16 mx-8 max-md:mr-2.5 max-md:mt-10" />{" "}
          <div className="items-stretch self-center flex justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                Company
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                About us
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Pricing
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Contact us
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Features
              </div>
            </div>{" "}
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                Product
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                Figma design system
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Ios kit
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Android kit
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Wireframe
              </div>
            </div>{" "}
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                Resources
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                Templates
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Landing pages
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Documentation
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Comp library
              </div>
            </div>{" "}
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                Legal
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                Privacy policy
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Terms & Conditions
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Disclaimer
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Affiliate programme
              </div>
            </div>{" "}
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                Support
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                Help centre
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Raise ticket
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Report
              </div>{" "}
              <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                Refund
              </div>
            </div>
          </div>{" "}
          <div className="justify-between items-stretch self-center flex w-[108px] max-w-full gap-5 mt-24 max-md:mt-10">
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fac21720c2fcb4f07db1255a5c7f14f09b1be214ebb5a4ef4dde6add65618e2?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac1cb5714f6001c906764b1a70bcdb21f098c83c187d39effb9f7b930205be8?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />{" "}
            <img alt="" 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd7f61948b60497d3d05fecdbbd1cd7aaf3f126c250ba4218d0c85ceaab40e98?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
            />
          </div>{" "}
          <div className="text-gray-500 text-center text-sm leading-5 self-stretch mt-6 mx-8 max-md:max-w-full max-md:mr-2.5">
            © 2023 Mode UI Inc. All Rights Reserved.
          </div>
        </div>
      </div>{" "}
      <div className="absolute shrink-0 box-border h-auto top-[-294.1051228841146px] left-[-1566.6666666666667px] w-[2875px]">
        Enter some text...
      </div>{" "}
    </>
  );
}
export default Desktop;