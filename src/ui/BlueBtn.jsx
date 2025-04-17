export default function BlueBtn({ children, className, ...props }) {
    return(
        <button className={`mt-4 bg-sky-950 text-white rounded-full px-6 py-2 shadow-lg hover:bg-sky-800 transition ${className}`} {...props}>
            {children}
      </button>
    );
}