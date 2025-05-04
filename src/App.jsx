import React, { Suspense } from 'react';
import Hero from './Components/Hero';
import HowItWorks from './Components/HowItWorks';
import JobSection from './Components/JobSection';
import Calculate from './Components/Calculate';
import Subscription from './Components/Subscription';
import DocumentTitle from './Hook/DocumentTitle';
const fetchJobData=fetch('/jobdata.json').then(res=>res.json())
const App = () => {
  return (
    <div>
          <DocumentTitle title='Home | Job Box'></DocumentTitle>
  <Hero></Hero>
  <HowItWorks></HowItWorks>

 <Suspense fallback={<div className='flex flex-col items-center'>
  <span className="loading loading-bars loading-lg"></span>
 </div>}>
 <JobSection fetchJobData={fetchJobData}></JobSection>
 </Suspense>
 <Calculate></Calculate>
 <Subscription></Subscription>
    </div>
  );
};

export default App;