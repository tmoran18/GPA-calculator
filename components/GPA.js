import { motion } from 'framer-motion';

export default function GPA({ score }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='flex my-5 justify-between sm:text-lg md:text-xl lg:text-2xl  font-bold'>
			<span>Your Grade Point Average (GPA)</span>
			<span>{score.toFixed(2)}</span>
		</motion.div>
	);
}
