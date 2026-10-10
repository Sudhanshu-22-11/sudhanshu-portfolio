export default function Footer() {
    return (
        <footer className="w-full p-0 bg-black overflow-hidden relative">
            <div className="w-full flex flex-col justify-between h-full py-10 md:py-16 px-6 md:px-20">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 text-white/30 uppercase text-[10px] md:text-[12px] font-medium tracking-[0.3em] md:tracking-[0.5em]">
                    <span>Based in Shivamogga, Karnataka, India</span>
                    <a
                        href="mailto:anshu402pandey@gmail.com"
                        className="hover:text-white transition-colors"
                    >
                        Available for Internships &amp; Projects →
                    </a>
                </div>

                <div className="marquee-container w-full overflow-hidden py-4 border-y border-white/5 my-6 md:my-8">
                    <div className="flex animate-marquee whitespace-nowrap">
                        <span className="text-[10vw] md:text-[8vw] font-medium text-white leading-none tracking-tighter uppercase mr-16 md:mr-32 flex-shrink-0">
                            Let&apos;s Build Together
                        </span>
                        <span className="text-[10vw] md:text-[8vw] font-medium text-white leading-none tracking-tighter uppercase mr-16 md:mr-32 flex-shrink-0">
                            Let&apos;s Build Together
                        </span>
                        <span className="text-[10vw] md:text-[8vw] font-medium text-white leading-none tracking-tighter uppercase mr-16 md:mr-32 flex-shrink-0">
                            Let&apos;s Build Together
                        </span>
                        <span className="text-[10vw] md:text-[8vw] font-medium text-white leading-none tracking-tighter uppercase mr-16 md:mr-32 flex-shrink-0">
                            Let&apos;s Build Together
                        </span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-white/30 pb-4">
                    <div className="flex flex-wrap gap-4 md:gap-16 pointer-events-auto">
                        <a
                            className="hover:text-white transition-colors uppercase text-xs md:text-sm font-medium tracking-widest"
                            href="https://github.com/Sudhanshu-22-11"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="hover:text-white transition-colors uppercase text-xs md:text-sm font-medium tracking-widest"
                            href="https://www.linkedin.com/in/sudhanshu-kumar-pandey-b52652381"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            className="hover:text-white transition-colors uppercase text-xs md:text-sm font-medium tracking-widest"
                            href="mailto:anshu402pandey@gmail.com"
                        >
                            Email
                        </a>
                    </div>
                    <div className="text-right text-[10px] md:text-xs tracking-widest uppercase opacity-40">
                        Sudhanshu Kumar Pandey • PESITM Shivamogga
                    </div>
                </div>
            </div>
        </footer>
    );
}
