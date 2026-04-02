import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center text-center">
      <h2 className="text-[120px] font-bold text-[#FA5252] leading-none mb-4 dark:drop-shadow-[0_0_15px_rgba(250,82,82,0.3)]">
        404
      </h2>
      <h3 className="text-3xl font-bold dark:text-white mb-6">
        Page Not Found!
      </h3>
      <p className="text-[#44566c] dark:text-[#A6A6A6] max-w-md mx-auto mb-10 leading-7">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>

      <Link
        href="/"
        className="dowanload-btn !inline-flex items-center space-x-2"
      >
        <span>Back to Home</span>
        <i className="fa-solid fa-house ml-2"></i>
      </Link>
    </section>
  );
}
