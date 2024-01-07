import * as React from "react";

function Tablet(props) {
  return (
    <div className="items-stretch bg-white flex max-w-screen-md flex-col">
      <div className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-2 border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="justify-center items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-1000,#E6E7E9)] bg-zinc-100 px-2 py-1 rounded-[240px] border-solid">
            Announcement
          </div>
          <div className="text-neutral-900 text-center text-sm font-medium leading-5 self-center grow my-auto max-md:max-w-full">
            We are happy to announce that we raise $2 Million in Seed Funding
          </div>
        </div>
      </div>
      <div className="justify-center items-stretch border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-5 border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="justify-between items-center flex w-[640px] max-w-full gap-5 pl-4 max-md:flex-wrap max-md:mr-1">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="justify-between items-stretch self-stretch flex gap-5 pr-2 py-0.5">
            <div className="justify-between items-stretch bg-zinc-100 flex gap-2 px-4 py-2 rounded-lg">
              <div className="text-gray-500 text-center text-base font-medium leading-5">
                Login
              </div>
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/103f5c9b3d64c741dd9339d20a5116062eba0e7028fb8d4f6320730a12def201?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <img alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21914adb70ee2044066963254bc9569d8b45fca50b6e3b1b159e6447df79ee32?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center pt-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="text-fuchsia-900 text-center text-base font-medium leading-5 self-stretch mt-11 max-md:max-w-full max-md:mt-10">
          Seamless experience
        </div>
        <div className="text-neutral-900 text-center text-6xl font-semibold leading-[72px] self-stretch mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Unleashing the Next Generation of Card Solutions
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 w-[576px] mt-4 max-md:max-w-full">
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
        <div className="text-gray-500 text-center text-sm font-medium leading-5 self-stretch mt-4 max-md:max-w-full">
          *No credit card required
        </div>
      </div>
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-stretch flex gap-5 mt-12 p-2 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0232849c8e7e5a541668440af5c7204d5d3ab888b185f74873cab643c440ad?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.08] object-contain object-center w-[98px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29e26d284ff6aec769ef55bf93bf3643d3717922457ce72c6af91019fb414b07?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[2.83] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28bfaf13e2a74f1464d2696187521ce0afdff0ff12c3dd0e535d94ddf7c3d272?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.17] object-contain object-center w-[124px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca29af05db6c3ea84d66713e50187903ce4dfd6034e9bddadbad16916b7bce10?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.42] object-contain object-center w-[106px] overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13bb39ec14a0a03569b766266fe2fc2ecf13fd481531611cbc4dbbf62cc562e4?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="items-stretch self-center flex justify-between gap-5 mt-8 mb-12 p-2 max-md:max-w-full max-md:flex-wrap max-md:mb-10">
          <img alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2f3273704265f6501f45f51c419de6d86b0011f8150fbfdf565eb81e3465b6a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5] object-contain object-center w-[120px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5b2e715f8867c8cabbd381141fc8e65b60924e4e71afb11ff41b7e376456f4c?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.25] object-contain object-center w-[102px] overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c8d4aa9cd9f04cda162cdeda1a0c3a8a5e68adc45b7b7bb3a84b5491a328b00?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.5] object-contain object-center w-[132px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 mt-12 max-md:max-w-full max-md:mt-10">
          Elevating Card Programs with Cutting-Edge Technology
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 self-center w-[576px] mt-4 max-md:max-w-full">
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
        <div className="justify-center items-center flex flex-col mt-12 mb-12 px-16 py-4 max-md:max-w-full max-md:my-10 max-md:px-5">
          <div className="flex w-[352px] max-w-full flex-col">
            <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e80e8428e9f42522e20be5b38d0ba8ef7b90061d24f583f37e82a17be71bed17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-neutral-900 text-center text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
              Globally Accepted
            </div>
            <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </div>
            <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 mt-16 px-4 rounded-[240px] max-md:mt-10">
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6620d4d405cb2efd02e93a2523b96c20d4edf4c430e8a09a91ce7d1db014bc5e?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-neutral-900 text-center text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
              Biometric Integrated
            </div>
            <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </div>
            <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 mt-16 px-4 rounded-[240px] max-md:mt-10">
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f31eaf30807de0cbf59759cd490e7bdf6e3f5f81c205b23435d2c46d90f4198?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-full overflow-hidden"
              />
            </div>
            <div className="text-neutral-900 text-center text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
              Fully Secured
            </div>
            <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="self-stretch text-neutral-900 text-center text-4xl font-semibold leading-10 mt-12 max-md:max-w-full max-md:mt-10">
          Elevating Card Programs with Cutting-Edge Technology
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 self-center w-[576px] mt-4 max-md:max-w-full">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
        <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
          <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Compare all Pro features
          </div>
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0d6bd2d2b542714256d7ba61341f0f1f763e3fd814a7bdd1e14dfe4dbe73241?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <img alt=""
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/df90b51a97e0b5b4ed5f704a5983a3b4d5238d8f403aaeed187bf1f2da900b5f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-[1.21] object-contain object-center w-full items-center overflow-hidden self-center max-w-[592px] mt-12 rounded-lg max-md:max-w-full max-md:mt-10"
        />
        <div className="justify-center bg-slate-50 self-center flex w-[592px] max-w-full flex-col mt-8 mb-12 px-16 py-12 rounded-lg items-end max-md:mb-10 max-md:px-5">
          <div className="justify-center items-center border bg-white flex w-[409px] max-w-full flex-col mr-4 mt-16 mb-9 p-7 rounded-xl border-solid border-purple-400 max-md:mr-2.5 max-md:mt-10 max-md:px-5">
            <div className="items-stretch self-stretch flex justify-between gap-5">
              <div className="items-stretch flex flex-col">
                <div className="text-neutral-900 text-xl font-semibold leading-6 whitespace-nowrap">
                  Spending
                </div>
                <div className="items-stretch flex justify-between gap-1.5 mt-1.5">
                  <img alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21fa342f5db53a6d2f3e4f62484c5ca42fd7f590b88ec1e49a31fbb71318121?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-500 text-sm font-medium leading-4 grow whitespace-nowrap self-start">
                    9349 visa card
                  </div>
                </div>
              </div>
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b988e26c091c6fbf75af0c9906190a0a67a57684c026ed2bc11a4ca7c7c8c4bf?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29617af8f93f1a5e818a6182d43df55ef3bb6b84c3ee5bf59f0947fa238991a7?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-[11.83] object-contain object-center w-[142px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="bg-gray-200 flex w-[102px] shrink-0 h-3 flex-col rounded-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-center items-center flex flex-col my-12 p-4 max-md:max-w-full max-md:mr-1 max-md:my-10">
          <div className="self-stretch text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] max-md:max-w-full max-md:text-4xl">
            2 Million
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 self-center whitespace-nowrap mt-4">
            Customers
          </div>
          <div className="text-gray-500 text-center text-base leading-7 self-center max-w-[248px] mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="self-stretch text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            1K
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 self-center whitespace-nowrap mt-4">
            Downloads
          </div>
          <div className="text-gray-500 text-center text-base leading-7 self-center max-w-[248px] mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="self-stretch text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            $73 Million
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 self-center whitespace-nowrap mt-4">
            Transaction
          </div>
          <div className="text-gray-500 text-center text-base leading-7 self-center max-w-[248px] mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="self-stretch text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            2.0
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 self-center whitespace-nowrap mt-4">
            Latest Version
          </div>
          <div className="text-gray-500 text-center text-base leading-7 self-center max-w-[248px] mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <img alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91645ef4abf3a7afd9a7cf1bd32e7c3322ae68108e3107b42f6e4161dbf00d57?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
        />
        <div className="self-stretch text-zinc-800 text-center text-3xl font-medium leading-10 mt-8 max-md:max-w-full">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </div>{" "}
        <img alt=""
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21a1cd80a28241f4df205bc13e497c066a541fd8b4982b5de010b117aeeeb065?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-16 justify-center items-center overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
        />{" "}
        <div className="self-center text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
          Nick Babich
        </div>{" "}
        <div className="self-center text-gray-500 text-center text-sm leading-5 whitespace-nowrap mt-1">
          Lead Designer
        </div>{" "}
        <div className="items-stretch self-center flex w-[100px] max-w-full gap-3 mt-4 mb-12 max-md:mb-10">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a4d361f1e4a11be8169b9a78ac8be3961e5aab70ea3302dc510e786afa58a44?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d0b1e622c2364cb913b0efaee11115f40a3e4d189ed6bb7c274b0f6f4bed04?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d05b9f4d0a82af073075057e5899bb2dd099cb71e55eac459cd57e81a158957d?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d82b9f39c7a9d241bd710fda078109081779ab8671a9b13f3df627188908194?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
        </div>
      </div>{" "}
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 mt-12 max-md:max-w-full max-md:mt-10">
          Unlock Limitless Possibilities with Our New Card Solutions
        </div>{" "}
        <div className="justify-center items-center flex flex-col mt-8 mb-12 px-16 max-md:max-w-full max-md:mb-10 max-md:px-5">
          <div className="flex items-stretch gap-2">
            <div className="justify-between items-stretch bg-fuchsia-900 flex gap-2 px-4 py-3 rounded-lg">
              <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
                Unlock your card
              </div>{" "}
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb7ed959a55e3a33056978cbaf9064eead35366c38389f4193f9a37f967919bd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
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
      <div className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-11 border-t border-solid max-md:max-w-full max-md:px-5">
        <img alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden self-center max-w-full mt-12 max-md:mt-10"
        />{" "}
        <div className="self-stretch text-gray-500 text-center text-base font-medium leading-7 mt-5 max-md:max-w-full">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </div>{" "}
        <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />{" "}
        <div className="self-stretch mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-800 text-base font-bold leading-5">
                  Company
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-6">
                  About us
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Pricing
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Contact us
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Features
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-800 text-base font-bold leading-5">
                  Product
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-6">
                  Figma design system
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Ios kit
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Android kit
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Wireframe
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-800 text-base font-bold leading-5">
                  Resources
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-6">
                  Templates
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Landing pages
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Documentation
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Comp library
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-8">
                <div className="text-zinc-800 text-base font-bold leading-5">
                  Legal
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-6">
                  Privacy policy
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Terms & Conditions
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Disclaimer
                </div>{" "}
                <div className="text-zinc-700 text-base font-medium leading-5 mt-4">
                  Affiliate programme
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-16 self-start max-md:mt-10">
          Support
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6 self-start">
          Help centre
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4 self-start">
          Raise ticket
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4 self-start">
          Report
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4 self-start">
          Refund
        </div>{" "}
        <div className="justify-between items-stretch self-center flex w-[108px] max-w-full gap-5 mt-16 max-md:mt-10">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e8ea83848fade99ba23f51c0b33cc3fac9294a9798330b4c65fdfff8283e81?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac1cb5714f6001c906764b1a70bcdb21f098c83c187d39effb9f7b930205be8?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1657b958fffbf65fdbcae4cf56d334b3d4e6ba637b51359749c3925293918a9f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
        </div>{" "}
        <div className="self-stretch text-gray-500 text-center text-sm leading-5 mt-6 max-md:max-w-full">
          © 2023 Mode UI Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
export default Tablet;