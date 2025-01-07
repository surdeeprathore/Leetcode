import React from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '@/utils/types/problem';

import { useState } from 'react';
 
type WorkspaceProps = {
	problem:Problem;
};

const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
// const {width,height} =useWindowSize();
const [success,setSuccess] =useState(false);
const [solved,setSolved] =useState(false);
	return <Split className='split'> 
		<ProblemDescription problem={problem} _solved={solved} />
		<div className='bg-dark-fill-2'>	
		<Playground problem ={problem} setSuccess={setSuccess} setSolved={setSolved}/>
     
		</div> 
	</Split>
}
export default Workspace;