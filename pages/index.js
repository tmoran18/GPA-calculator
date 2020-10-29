import { useState } from 'react';
import GradeInput from '../components/GradeInput';
import GPA from '../components/GPA';
import Button from '../components/Button';

export default function IndexPage() {
	const [inputState, setInputState] = useState({
		totalUnits: '',
		highDistinctions: '',
		distinctions: '',
		credits: '',
		passes: '',
		fails: '',
	});

	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputState({
			...inputState,
			[e.target.name]: parseInt(value),
		});
	};
	return (
		<div className='h-screen bg-hero-pattern bg-no-repeat bg-cover p-15'>
			<div className='p-5 '>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-accent-1 font-bold mb-2 mt-5'>
					GPA CALCULATOR
				</h1>
				<section className='p-5 md:p-10 lg:p-10 xl:p-15 rounded m-auto max-w-screen-sm bg-gray-300'>
					<GradeInput
						labelName='Total number of Units'
						name='totalUnits'
						value={inputState.totalUnits}
						handleInputChange={handleInputChange}
					/>
					<GradeInput
						labelName='High Disticntions'
						name='highDistinctions'
						value={inputState.highDistinctions}
						handleInputChange={handleInputChange}
					/>
					<GradeInput
						labelName='Distinctions'
						name='distinctions'
						value={inputState.distinctions}
						handleInputChange={handleInputChange}
					/>
					<GradeInput
						labelName='Credits'
						name='credits'
						value={inputState.credits}
						handleInputChange={handleInputChange}
					/>
					<GradeInput
						labelName='Passes'
						name='passes'
						value={inputState.passes}
						handleInputChange={handleInputChange}
					/>
					<GradeInput
						labelName='Fails'
						name='fails'
						value={inputState.fails}
						handleInputChange={handleInputChange}
					/>
					<div className='border-b border-gray-600 w-full mt-10 mb-8'></div>
					<GPA />
				</section>
				<div className='flex justify-between items-center flex-col sm:flex-row max-w-screen-sm m-auto'>
					<Button bgColor='bg-teal-400'>CALCULATE GPA</Button>
					<Button bgColor='bg-red-400'>RESET</Button>
				</div>
			</div>
		</div>
	);
}
