import { useState } from 'react';
import GradeInput from '../components/GradeInput';
import GPA from '../components/GPA';
import Button from '../components/Button';

export default function IndexPage() {
	const [creditPoint, setCreditPoint] = useState(12);
	const [totalUnits, setTotalUnits] = useState(['', 0]);
	const [highDistinctions, setHighDistinctions] = useState(['', 7]);
	const [distinctions, setDistinctions] = useState(['', 6]);
	const [credits, setCredits] = useState(['', 5]);
	const [passes, setPasses] = useState(['', 4]);
	const [fails, setFails] = useState(['', 0]);
	const [GpaScore, setGpaScore] = useState(0);

	// Multiply each grade value by the unit credit points
	// Sum the resulting values (weighted GPA unit score)
	// Sum the unit credit points
	// Divide the sum of the weighted GPA unit score by the sum of the unit credit points
	// Calculate to three decimal places.

	// GPA = Sum of ( Grade Point × Credit Points ) ÷ Sum of ( Credit Points )

	//TODO
	// 1. Check number of grades = total number of units function
	// 2. Make sure inputs can only receive numbers
	// Sum of ( Grade Point × Credit Points )
	const sumOfGradePointByCreditPoint = () => {
		const HD = highDistinctions[0] * highDistinctions[1] * creditPoint;
		const D = distinctions[0] * distinctions[1] * creditPoint;
		const C = credits[0] * credits[1] * creditPoint;
		const P = passes[0] * passes[1] * creditPoint;
		return HD + D + C + P;
	};

	// Sum of ( Credit Points )
	const sumOfCreditPoints = () => totalUnits[0] * creditPoint;

	const getGPA = () => {
		const gradePoints = sumOfGradePointByCreditPoint();
		const creditPoints = sumOfCreditPoints();
		setGpaScore(gradePoints / creditPoints);
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
						name='TotalUnits'
						value={totalUnits[0]}
						points={0}
						setState={setTotalUnits}
					/>
					<div
						class='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
						role='alert'>
						<span class='block sm:inline'>
							You have more grades than total number of units.
						</span>
						<span class='absolute top-0 bottom-0 right-0 px-4 py-3'>
							<svg
								class='fill-current h-6 w-6 text-red-500'
								role='button'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'>
								<title>Close</title>
								<path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
							</svg>
						</span>
					</div>
					<div className='border-b border-gray-600 w-full mt-10 mb-8'></div>
					<GradeInput
						labelName='High Disticntions'
						name='highDistinctions'
						value={highDistinctions[0]}
						points={highDistinctions[1]}
						setState={setHighDistinctions}
					/>
					<GradeInput
						labelName='Distinctions'
						name='distinctions'
						value={distinctions[0]}
						points={distinctions[1]}
						setState={setDistinctions}
					/>
					<GradeInput
						labelName='Credits'
						name='credits'
						value={credits[0]}
						points={credits[1]}
						setState={setCredits}
					/>
					<GradeInput
						labelName='Passes'
						name='passes'
						value={passes[0]}
						points={passes[1]}
						setState={setPasses}
					/>
					<GradeInput
						labelName='Fails'
						name='fails'
						value={fails[0]}
						points={fails[1]}
						setState={setFails}
					/>
					<div className='border-b border-gray-600 w-full mt-10 mb-8'></div>
					<GPA score={GpaScore} />
				</section>
				<div className='flex justify-between items-center flex-col sm:flex-row max-w-screen-sm m-auto'>
					<Button handleBtnClick={getGPA} bgColor='bg-teal-400'>
						CALCULATE GPA
					</Button>
					<Button bgColor='bg-red-400'>RESET</Button>
				</div>
			</div>
		</div>
	);
}
