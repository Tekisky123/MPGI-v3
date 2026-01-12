

const ScrollingTicker = () => {
    return (
        <div className="bg-yellow-400 text-black py-2 overflow-hidden border-b border-yellow-500">
            <div className="animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap inline-block w-full">
                <span className="mx-2">
                    <a
                        href="https://www.aicte-india.org/feedback/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-semibold"
                    >
                        AICTE Feedback portal: www.aicte-india.org/feedback/
                    </a>
                </span>
                <span className="mx-2">|</span>
                <span className="mx-2">
                    <a
                        href="https://www.aicte-india.org/feedback/students.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-semibold"
                    >
                        For Students: www.aicte-india.org/feedback/students.php
                    </a>
                </span>
                <span className="mx-2">|</span>
                <span className="mx-2">
                    <a
                        href="https://www.aicte-india.org/feedback/faculty.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-semibold"
                    >
                        For Faculty: www.aicte-india.org/feedback/faculty.php
                    </a>
                </span>

            </div>
        </div>
    );
};

export default ScrollingTicker;
