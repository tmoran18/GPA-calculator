export default function GradeInput({
	labelName,
	name,
	value,
	handleInputChange,
}) {
	return (
		<div className='flex my-5'>
			<label
				htmlFor={labelName}
				className='font-semibold sm:text-lg md:text-xl lg:text-2xl flex-row justify-between w-full'>
				{labelName}
			</label>
			<input
				type='text'
				name={name}
				value={value}
				onChange={(e) => handleInputChange(e)}
				className='w-24 p-1 sm:p-2 rounded border-solid border border-gray-500 shadow-lg focus:outline-none focus:shadow-outline focus:border-blue-500'
			/>
		</div>
	);
}