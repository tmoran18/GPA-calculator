export default function GradeInput({
	labelName,
	name,
	value,
	points,
	setState,
}) {
	return (
		<div className='flex my-5'>
			<label
				htmlFor={labelName}
				className='font-semibold sm:text-lg md:text-xl lg:text-2xl flex-row justify-between w-full'>
				{labelName}
			</label>
			<input
				type='number'
				name={name}
				value={value}
				onChange={(e) => setState([e.target.value, points])}
				className='w-24 p-1 sm:p-2 rounded border-solid border border-gray-500 shadow-lg focus:outline-none focus:shadow-outline focus:border-blue-500'
			/>
			<style jsx>
				{`
					/* Chrome, Safari, Edge, Opera */
					input::-webkit-outer-spin-button,
					input::-webkit-inner-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}

					/* Firefox */
					input[type='number'] {
						-moz-appearance: textfield;
					}
				`}
			</style>
		</div>
	);
}
