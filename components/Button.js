export default function Button({ children, bgColor, handleBtnClick }) {
	return (
		<button
			onClick={handleBtnClick}
			className={`${bgColor} w-64 py-3 rounded font-extrabold text-xl border-none shadow-2xl mt-6 transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:shadow-outline focus:border-blue-300 `}>
			{children}
		</button>
	);
}
