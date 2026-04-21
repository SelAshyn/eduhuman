export default function TopBar() {
  return (
    <>
      <div
      className="hidden lg:flex px-40 py-[7px] justify-between items-center"
      style={{ fontFamily: "Ubuntu, sans-serif" }}
    >
      <div className="flex gap-6 items-center">
        {["info@eduhuman.org", "+977 01-4123456", "Kathmandu, Nepal"].map(
          (item) => (
            <span
              key={item}
              className="flex items-center gap-[5px] text-[11px] text-[#000000] tracking-[0.3px]"
            >
              <span className="w-[3px] h-[3px] rounded-full bg-[#1D9E75]" />
              {item}
            </span>
          )
        )}
      </div>

      <div className="flex gap-3 items-center">
        <div className="w-[22px] h-[22px] border border-[#1D9E75] rounded-[4px] flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#5DCAA5">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </div>

        <div className="w-[22px] h-[22px] border border-[#1D9E75] rounded-[4px] flex items-center justify-center">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#5DCAA5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
