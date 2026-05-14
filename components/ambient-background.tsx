export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="animate-gradient absolute -left-[20%] -top-[30%] h-[85vh] w-[85vh] rounded-full bg-[radial-gradient(circle_at_center,_#fde7da_0%,_transparent_65%)] blur-3xl" />
      <div className="animate-gradient absolute left-[15%] top-[5%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle_at_center,_#e9d5ff_0%,_transparent_62%)] blur-3xl [animation-delay:-4s]" />
      <div className="animate-gradient absolute -right-[10%] top-[20%] h-[75vh] w-[75vh] rounded-full bg-[radial-gradient(circle_at_center,_#fce7f3_0%,_transparent_60%)] blur-3xl [animation-delay:-8s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/40 via-transparent to-[#f0ebe3]/90" />
    </div>
  );
}
