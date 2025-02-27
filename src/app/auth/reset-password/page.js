import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-secondary">Login</h2>
                <p className="mt-2 text-center text-decripation">Best place to buy and sell digital products</p>
                <div className="w-full pt-6 mx-auto lg:w-5/12">
                    <label className="block w-full text-base font-semibold text-secondary">Email *</label>
                    <input type="email" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    <label className="block w-full mt-5 text-base font-semibold text-secondary">Password *</label>
                    <input type="password" placeholder="Enter Your Password" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    <Link className="block w-full py-2 text-sm text-right hover:text-primary hover:underline" href={'forgot-password'}>Forgot Password?</Link>
                    <button className="block px-6 py-2 mx-auto font-medium text-white rounded-md bg-primary">Login</button>
                    <p className="pt-5 text-sm text-center">Don&apos;t have an account? <Link className="font-semibold text-primary" href={'signup'}>Register</Link></p>
                </div>
            </div>
        </>
    );
}