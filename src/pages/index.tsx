// import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
// import Topbar from "@/components/Topbar/Topbar";
// import { useState } from "react";

// // Pagination Component
// type PaginationProps = {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// };

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
//   const renderPageNumbers = () => {
//     const pageNumbers = [];

//     if (totalPages <= 5) {
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(
//           <button
//             key={i}
//             className={`px-3 py-1 mx-1 rounded ${
//               currentPage === i
//                 ? "bg-brand-orange text-white font-bold"
//                 : "bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2"
//             }`}
//             onClick={() => onPageChange(i)}
//           >
//             {i}
//           </button>
//         );
//       }
//     } else {
//       if (currentPage > 3) {
//         pageNumbers.push(
//           <button
//             key={1}
//             className="px-3 py-1 mx-1 bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2 rounded"
//             onClick={() => onPageChange(1)}
//           >
//             1
//           </button>
//         );
//         if (currentPage > 4) {
//           pageNumbers.push(
//             <span key="start-dots" className="px-3 py-1 mx-1 text-gray-400">
//               ...
//             </span>
//           );
//         }
//       }

//       const startPage = Math.max(2, currentPage - 1);
//       const endPage = Math.min(totalPages - 1, currentPage + 1);

//       for (let i = startPage; i <= endPage; i++) {
//         pageNumbers.push(
//           <button
//             key={i}
//             className={`px-3 py-1 mx-1 rounded ${
//               currentPage === i
//                 ? "bg-brand-orange text-white font-bold"
//                 : "bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2"
//             }`}
//             onClick={() => onPageChange(i)}
//           >
//             {i}
//           </button>
//         );
//       }

//       if (currentPage < totalPages - 3) {
//         pageNumbers.push(
//           <span key="end-dots" className="px-3 py-1 mx-1 text-gray-400">
//             ...
//           </span>
//         );
//       }

//       if (currentPage < totalPages - 2) {
//         pageNumbers.push(
//           <button
//             key={totalPages}
//             className="px-3 py-1 mx-1 bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2 rounded"
//             onClick={() => onPageChange(totalPages)}
//           >
//             {totalPages}
//           </button>
//         );
//       }
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className="flex items-center justify-center mt-6">
//       <button
//         className={`px-3 py-1 mx-1 rounded ${
//           currentPage === 1
//             ? "bg-dark-layer-1 text-gray-600 cursor-not-allowed"
//             : "bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2"
//         }`}
//         onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         &#8592;
//       </button>

//       {renderPageNumbers()}

//       <button
//         className={`px-3 py-1 mx-1 rounded ${
//           currentPage === totalPages
//             ? "bg-dark-layer-1 text-gray-600 cursor-not-allowed"
//             : "bg-dark-layer-1 text-gray-400 hover:bg-dark-layer-2"
//         }`}
//         onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// export default function Home() {
//   const [inputs, setInputs] = useState({
//     id: "",
//     title: "",
//     difficulty: "",
//     category: "",
//     videoId: "",
//     link: "",
//     order: 0,
//     likes: 0,
//     dislikes: 0,
//   });

//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Set this dynamically based on your data

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     console.log("Page changed to:", page);
//     // Add API calls or logic to fetch table data for the selected page
//   };

//   console.log(inputs);

//   return (
//     <>
//       <main className="bg-dark-layer-2 min-h-screen">
//         <Topbar />
//         <h1
//           className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
// 					uppercase mt-10 mb-5"
//         >
//           &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
//         </h1>
//         <div className="relative overflow-x-auto mx-auto px-6 pb-10">
//           <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
//             <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
//               <tr>
//                 <th scope="col" className="px-1 py-3 w-0 font-medium">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 w-0 font-medium">
//                   Title
//                 </th>
//                 <th scope="col" className="px-6 py-3 w-0 font-medium">
//                   Difficulty
//                 </th>
//                 <th scope="col" className="px-6 py-3 w-0 font-medium">
//                   Category
//                 </th>
//                 <th scope="col" className="px-6 py-3 w-0 font-medium">
//                   Solution
//                 </th>
//               </tr>
//             </thead>
//             <ProblemsTable />
//           </table>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}/>
//         </div>
//       </main>
//        </>
//   );
// }

// const LoadingSkeleton = () => {
//   return (
//     <div className="flex items-center space-x-12 mt-4 px-6">
//       <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
//       <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
//       <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
//       <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// };



import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/components/hooks/useHasMounted";

import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					&ldquo; QUALITY OVER QUANTITY &rdquo; 👇
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};