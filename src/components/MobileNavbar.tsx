import clsx from "clsx";
import cvFile from '../assets/PhanNguyenDucTrong_CV.pdf'

export default function MobileNavbar() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full z-[8]">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="flex items-center justify-between pb-6 pt-10 px-4 relative w-full">
          {/* Icon hamburger */}
          <div className={clsx("relative shrink-0", "size-[40px]")}>
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center relative size-full">
                <div className="aspect-[24/24] flex-[1_0_0] min-h-px min-w-px relative" data-name="icon">
                  <div className="absolute inset-[26.04%_13.54%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.1667 19.1667">
                      <path clipRule="evenodd" d="M29.1667 1.25C29.1667 1.58152 29.035 1.89946 28.8006 2.13388C28.5661 2.3683 28.2482 2.5 27.9167 2.5H1.25C0.918479 2.5 0.600537 2.3683 0.366116 2.13388C0.131696 1.89946 0 1.58152 0 1.25C0 0.918479 0.131696 0.600537 0.366116 0.366116C0.600537 0.131696 0.918479 0 1.25 0H27.9167C28.2482 0 28.5661 0.131696 28.8006 0.366116C29.035 0.600537 29.1667 0.918479 29.1667 1.25ZM29.1667 9.58333C29.1667 9.91485 29.035 10.2328 28.8006 10.4672C28.5661 10.7016 28.2482 10.8333 27.9167 10.8333H1.25C0.918479 10.8333 0.600537 10.7016 0.366116 10.4672C0.131696 10.2328 0 9.91485 0 9.58333C0 9.25181 0.131696 8.93387 0.366116 8.69945C0.600537 8.46503 0.918479 8.33333 1.25 8.33333H27.9167C28.2482 8.33333 28.5661 8.46503 28.8006 8.69945C29.035 8.93387 29.1667 9.25181 29.1667 9.58333ZM29.1667 17.9167C29.1667 18.2482 29.035 18.5661 28.8006 18.8006C28.5661 19.035 28.2482 19.1667 27.9167 19.1667H1.25C0.918479 19.1667 0.600537 19.035 0.366116 18.8006C0.131696 18.5661 0 18.2482 0 17.9167C0 17.5851 0.131696 17.2672 0.366116 17.0328C0.600537 16.7984 0.918479 16.6667 1.25 16.6667H27.9167C28.2482 16.6667 28.5661 16.7984 28.8006 17.0328C29.035 17.2672 29.1667 17.5851 29.1667 17.9167Z" fill="var(--fill-0, #0F0F0F)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="font-semibold leading-[40px] shrink-0 text-[#111928] text-[28px] whitespace-nowrap">.Portfolio</p>

          <a
            href={cvFile}
            download="PhanNguyenDucTrong_CV.pdf"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded border border-primary"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
              <path d="M10 3.75V12.5M10 12.5L6.875 9.375M10 12.5L13.125 9.375M5 16.25H15" stroke="#5475e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="gradient-text font-medium text-base leading-6 whitespace-nowrap">My Resumé</span>
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe4ea] border-b border-solid inset-0 pointer-events-none" />
    </div>
  )
}
