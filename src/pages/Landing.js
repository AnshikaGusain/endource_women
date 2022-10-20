import { React,lazy,Suspense } from 'react';
const SummerShop =lazy(()=>import('../components/SummerShop'));
function Landing() {
  return (
    <div>
      <Suspense>
        <SummerShop/>
      </Suspense>
    </div>
  );
}

export default Landing;
