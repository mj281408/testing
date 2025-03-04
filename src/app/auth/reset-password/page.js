'use client'
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-secondary">Reset Password</h2>
                <p className="mt-2 text-center text-decripation">This is the last step to reset your password.</p>
                <div className="w-full pt-6 mx-auto lg:w-5/12">                  
                    <label className="block w-full mt-5 text-base font-semibold text-secondary">Password *</label>
                    <input type="password" placeholder="Enter Your Password" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    <label className="block w-full mt-5 text-base font-semibold text-secondary">Confirm Password *</label>
                    <input type="password" placeholder="Enter Confirm Password" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    <button onClick={()=>router.push('login')} className="block px-6 py-2 mx-auto mt-5 font-medium text-white rounded-md bg-primary">Submit</button>
                </div>
            </div>
        </>
    );
}