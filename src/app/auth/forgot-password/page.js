'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-secondary">Forgot Password</h2>
                <p className="mt-2 text-center text-decripation">No worries! we&apos;ll help you reset your password!</p>
                <div className="w-full pt-6 mx-auto lg:w-5/12">
                    <label className="block w-full text-base font-semibold text-secondary">Email *</label>
                    <input type="email" placeholder="Enter Your Registered Email" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    <button onClick={()=>router.push('verify-account')} className="block px-6 py-2 mx-auto mt-5 font-medium text-white rounded-md bg-primary">Send Code</button>
                    <p className="pt-5 text-sm text-center">Remeber Your Password  <Link className="font-semibold text-primary" href={'login'}>Login</Link></p>
                </div>
            </div>
        </>
    );
}