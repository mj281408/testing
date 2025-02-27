import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-secondary">Register</h2>
                <p className="mt-2 text-center text-decripation">Best place to buy and sell digital products</p>
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">First Name *</label>
                        <input type="text" placeholder="Enter Your First Name" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Last  Name *</label>
                        <input type="text" placeholder="Enter Your Last  Name" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Phone Number *</label>
                        <input type="text" placeholder="Enter Your Phone Number" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Email *</label>
                        <input type="email" placeholder="Enter Your Email" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div> 
                     <div className="col-span-2">
                        <label className="block w-full text-base font-semibold text-secondary">Address *</label>
                        <input type="text" placeholder="Enter Your Address" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">City *</label>
                        <input type="text" placeholder="Enter Your City" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Post Code *</label>
                        <input type="text" placeholder="Enter Your Post  Code" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Country *</label>
                        <input type="text" placeholder="Enter Your Country" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Region State *</label>
                        <input type="text" placeholder="Enter Your Region State" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Password *</label>
                        <input type="password" placeholder="Enter Your Password" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                    <div className="">
                        <label className="block w-full text-base font-semibold text-secondary">Confirm Password *</label>
                        <input type="password" placeholder="Confirm Your Password" className="block w-full px-4 py-2 mt-1 border rounded-md outline-primary" />
                    </div>
                </div>
                <button className="block px-6 py-2 mx-auto font-medium text-white rounded-md bg-primary">Register</button>
                <p className="pt-5 text-sm text-center">Already have an Account?  <Link className="font-semibold text-primary" href={'login'}>Login</Link></p>
            </div>
        </>
    );
}