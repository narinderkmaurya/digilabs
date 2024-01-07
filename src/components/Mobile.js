import * as React from "react";

function Mobile(props) {
  return (
    <div className="items-stretch bg-white flex max-w-[480px] w-full flex-col mx-auto">
      <div className="justify-center items-stretch border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col p-2 border-b border-solid">
        <div className="justify-between items-center flex gap-4">
          <div className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-1000,#E6E7E9)] bg-zinc-100 my-auto px-2 py-1 rounded-[240px] border-solid">
            Announcement
          </div>
          <div className="text-neutral-900 text-xs font-medium leading-4">
            We are happy to announce that we raise $2 Million in Seed Funding
          </div>
        </div>
      </div>
      <div className="items-stretch border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col justify-center px-4 py-5 border-b border-solid">
        <div className="justify-between items-center flex w-full gap-5 pl-4">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="items-stretch self-stretch flex justify-between gap-5 pr-2 py-0.5">
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
      <div className="flex w-full flex-col items-stretch pt-10 pb-2 px-4">
        <div className="text-fuchsia-900 text-center text-base font-medium leading-5 whitespace-nowrap">
          Seamless experience
        </div>
        <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 mt-4">
          Unleashing the Next Generation of Card Solutions
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 mt-4">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </div>
        <div className="justify-between items-stretch bg-fuchsia-900 flex gap-2 mt-8 px-20 py-4 rounded-lg">
          <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Unlock your Card
          </div>
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf2c4c487d98bbc24bdb08820a797827c71877cdea70d9947f639bbc402f815?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="text-gray-500 text-center text-sm font-medium leading-5 whitespace-nowrap mt-4">
          *No credit card required
        </div>
      </div>
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-4 py-12">
        <div className="justify-between items-stretch flex gap-5 mt-3.5 p-2">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33d8abbeaaeba3f222c98bf3652084e6f0f5b86e8d83456ea9832ecb3bd0a380?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.06] object-contain object-center w-[65px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ecd8eb89039e93f5586d3fca7b0b83b96fb081bfa450f2d6596061a17f46791?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[2.88] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8f40d72bd6da9e7a3176fac29073565413f3e1321977fcabb80cd4c95d79a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.13] object-contain object-center w-[82px] justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99d0ce51b15adf4bf77fb28de0ef8776be843466e89451834ed2e7b1a1a51926?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.44] object-contain object-center w-[71px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="justify-between items-stretch flex gap-2.5 mt-6 mb-3.5 p-2">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3031ba01ef4b94f1f208ec98cc451b7b50e18d3dce06d0351e055f094ed2d562?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4] object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a500749a98bb9b58ddfd029ca4d5c2618344c3baf66d65ca2e18c5f2feeafd17?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5] object-contain object-center w-20 justify-center items-center overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9fa213e41245c381c58dd939a38985c64068b09ae7555e3fe87671bd28163bf?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[4.25] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full"
          />
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3730efd142310e01746d0e62e640bc11c161055c472e0878c4ad47e855a5287d?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[5.5] object-contain object-center w-[88px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>
      <div className="justify-center items-center bg-white flex w-full flex-col px-4 py-12">
        <div className="self-stretch text-neutral-900 text-center text-3xl font-semibold leading-10 mt-3.5">
          Elevating Card Programs with Cutting-Edge Technology
        </div>
        <div className="self-stretch text-gray-500 text-center text-lg leading-7 mt-4">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
        <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
          <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Compare all Pro features
          </div>
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/edc9a06669063ebc8832651516612d35046a6223e55cf883baa0de736be57a96?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="items-start self-stretch flex flex-col mt-12 mb-3.5 p-4">
          <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
            <img alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bddee9bbaae19265e47b06f00f76b629df5be7082d6264d37190d8732aa779f1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="self-stretch text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Globally Accepted
          </div>
          <div className="text-gray-500 text-center text-sm font-medium leading-6 self-stretch mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </div>
          <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 mt-16 px-4 rounded-[240px]">
            <img alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba317bfca12c068b2cbda26980f1c3588f634b591df582869e55aeb87432267?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="self-stretch text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Biometric Integrated
          </div>
          <div className="text-gray-500 text-center text-sm font-medium leading-6 self-stretch mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </div>
          <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 mt-16 px-4 rounded-[240px]">
            <img alt=""
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5fabbc4fe8435d48cac728936dea97e4e3f9f4b336488001e99b533233f7ee5?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="self-stretch text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Fully Secured
          </div>
          <div className="text-gray-500 text-center text-sm font-medium leading-6 self-stretch mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod{" "}
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white flex w-full flex-col px-4 py-12">
        <div className="self-stretch text-neutral-900 text-center text-3xl font-semibold leading-10 mt-3.5">
          Elevating Card Programs with Cutting-Edge Technology
        </div>
        <div className="self-stretch text-gray-500 text-center text-lg leading-7 mt-4">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
        <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
          <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Compare all Pro features
          </div>
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d5254bd0744099e3387e13e274b1836d89188a8ab10fe132e572a92a3ae2ea6?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="justify-center items-stretch bg-slate-50 self-stretch flex flex-col mt-12 pt-5 px-9 rounded-lg">
          <img alt=""
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/526f2b5eab970871ff65ccd42ad266ec7485df4964312ce583a8b0bd6dff1c3f?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-[1.04] object-contain object-center w-full overflow-hidden"
          />
        </div>
        <div className="justify-center items-stretch bg-slate-50 self-stretch flex flex-col mt-8 mb-3.5 pl-14 pr-8 py-12 rounded-lg">
          <div className="justify-center items-stretch bg-white flex w-full flex-col mt-2 mb-1 p-4 rounded-lg border-[0.635px] border-solid border-purple-400">
            <div className="items-stretch flex justify-between gap-5">
              <div className="items-stretch flex flex-col">
                <div className="text-neutral-900 text-xs font-semibold leading-4 whitespace-nowrap">
                  Spending
                </div>
                <div className="items-stretch flex justify-between gap-1 mt-1">
                  <img alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/832c1d774df0fabef1ab3adcfbbc6fda1e83490384a45ea36fd85084decd0ad0?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                    className="aspect-[1.08] object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-500 text-xs font-medium leading-3 grow whitespace-nowrap self-start">
                    9349 visa card
                  </div>
                </div>
              </div>
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3085facfc3d62e537d512ee5d3295fe81e44fc59ce32b2000c33ebe017735d75?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-square object-contain object-center w-[13px] overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="items-stretch flex justify-between gap-1.5 mt-4">
              <div className="text-neutral-900 text-xl font-medium leading-6">
                127.14
              </div>
              <div className="text-neutral-900 text-xs font-medium leading-3 self-center my-auto">
                USD
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-5 mt-2">
              <div className="text-gray-500 text-xs font-medium leading-3 whitespace-nowrap">
                vs last week
              </div>
              <div className="text-gray-500 text-[10px] text-right font-medium leading-3 grow whitespace-pre-wrap ">
                Last Purchased ( Feb 24 19:59 UTC-5 )
              </div>
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-5 pr-8">
              <div className="text-gray-500 text-xs font-medium leading-3">
                400 USD
              </div>
              <div className="text-gray-500 text-xs font-medium leading-3 self-center my-auto">
                1000 USD
              </div>
              <div className="text-gray-500 text-xs font-medium leading-3 self-center my-auto">
                5000 USD
              </div>
            </div>
            <div className="items-stretch flex gap-0.5 mt-2 px-0.5">
              <div className="bg-fuchsia-900 flex w-[65px] shrink-0 h-2 flex-col rounded-lg" />
              <img alt=""
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2ee941d26795c608255d3279fe4fd069709678962fe3e852f4dc043b43d6544?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
                className="aspect-[11.25] object-contain object-center w-[90px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="bg-gray-200 flex w-[65px] shrink-0 h-2 flex-col rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-4 py-12">
        <div className="items-stretch flex flex-col my-3.5 px-16 py-4">
          <div className="text-fuchsia-900 text-center text-4xl font-semibold leading-10 whitespace-nowrap">
            2 Million
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Customers
          </div>
          <div className="text-gray-500 text-center text-base leading-7 mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="text-fuchsia-900 text-center text-4xl font-semibold leading-10 whitespace-nowrap mt-16">
            1K
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Downloads
          </div>
          <div className="text-gray-500 text-center text-base leading-7 mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="text-fuchsia-900 text-center text-4xl font-semibold leading-10 whitespace-nowrap mt-16">
            $73 Million
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Transaction
          </div>
          <div className="text-gray-500 text-center text-base leading-7 mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
          <div className="text-fuchsia-900 text-center text-4xl font-semibold leading-10 whitespace-nowrap mt-16">
            2.0
          </div>
          <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
            Latest Version
          </div>
          <div className="text-gray-500 text-center text-base leading-7 mt-2">
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-white flex w-full flex-col px-4 py-12">
        <img alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a6e4f167ac3fe3c10475bbf8a360f4b6c444927748abdc4d20940f2eb06421?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden self-center max-w-full mt-3.5"
        />
        <div className="self-stretch text-zinc-800 text-center text-xl font-medium leading-6 mt-8">
          I had the pleasure of experiencing the next generation of card
          solutions with this incredible product. It's refreshing to see such
          innovation in the financial industry.
        </div>{" "}
        <img alt=""
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/86b20123d0d72a3d8a054107e3006d29c680899bc3a94ab47e8f1dd893fc1bbd?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-square object-contain object-center w-16 justify-center items-center overflow-hidden self-center max-w-full mt-12"
        />{" "}
        <div className="self-center text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
          Nick Babich
        </div>{" "}
        <div className="self-center text-gray-500 text-center text-sm leading-5 whitespace-nowrap mt-1">
          Lead Designer
        </div>{" "}
        <div className="items-stretch self-center flex w-[100px] max-w-full gap-3 mt-4 mb-5">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8ee1f3e16f652956bcb89bcc1c76744508cd2f1aaf2faaeb4be87a3a8e7b06b?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d850610c479fb8aa819a8315ae2b643c53319fcee82bcd6894335b9a1c267e4?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8d4b30480dfa3e1e0098b910df08024ff9316c86a54e6d4071f7af577981303?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eca6035c4071dc9046199f371640c055faa9b75a8e8991afc4ccaa7de2c0f58?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
        </div>
      </div>{" "}
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-4 py-12">
        <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 mt-3.5">
          Unlock Limitless Possibilities with Our New Card Solutions
        </div>{" "}
        <div className="justify-between items-stretch bg-fuchsia-900 flex gap-2 mt-8 px-20 py-3 rounded-lg">
          <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Unlock your card
          </div>{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20ddaf0980841700220b206a0bee09cd0b063c8ef3714081d7d50b1a5887d168?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="justify-between items-stretch bg-zinc-100 flex gap-2 mt-2 mb-3.5 px-20 py-3 rounded-lg">
          <div className="text-gray-500 text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Customer support
          </div>{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fe5c5efcbede8a7cd6f8615906fd3273708b67152d60988100c3d1021f736ed?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
      </div>{" "}
      <div className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-4 py-11 border-t border-solid">
        <img alt=""
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e19114f878250cadcb21cea6bd3f35f9691fd2065b58b90d7602211ee5ddb1?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
          className="aspect-[5.25] object-contain object-center w-[84px] fill-neutral-900 overflow-hidden max-w-full self-start"
        />{" "}
        <div className="self-stretch text-gray-500 text-base font-medium leading-7 mt-5">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </div>{" "}
        <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8" />{" "}
        <div className="self-stretch text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-8">
          Company
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-6">
          About us
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Pricing
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Contact us
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Features
        </div>{" "}
        <div className="self-stretch text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-8">
          Product
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-6">
          Figma design system
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Ios kit
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Android kit
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Wireframe
        </div>{" "}
        <div className="self-stretch text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-16">
          Resources
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-6">
          Templates
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Landing pages
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Documentation
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Comp library
        </div>{" "}
        <div className="self-stretch text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-8">
          Legal
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-6">
          Privacy policy
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Terms & Conditions
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Disclaimer
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Affiliate programme
        </div>{" "}
        <div className="self-stretch text-zinc-800 text-base font-bold leading-5 whitespace-nowrap mt-8">
          Support
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-6">
          Help centre
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Raise ticket
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Report
        </div>{" "}
        <div className="text-zinc-700 text-base font-medium leading-5 self-stretch whitespace-nowrap mt-4">
          Refund
        </div>{" "}
        <div className=" w-full flex gap-5 mt-16 ">
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a38a245495260fb143959e294319693543b53e71d2c42af9a36037c7735be4a?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ac1cb5714f6001c906764b1a70bcdb21f098c83c187d39effb9f7b930205be8?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />{" "}
          <img alt=""
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a4fedd4b24905444a43b0f57a3770dad3e59426683489587a2b6de94127215?apiKey=6eecde7a29ee4cb9abef5e4d0032874f&"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>{" "}
        <div className="text-gray-500 text-sm leading-5 self-stretch mt-6">
          © 2023 Mode UI Inc. All Rights <br/> Reserved.
        </div>
      </div>
    </div>
  );
}
export default Mobile;