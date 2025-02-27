'use client'
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Page() {
      const router = useRouter();
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return; // Allow only digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const otpCode = otp.join("");
        console.log("Entered OTP:", otpCode);
        router.push('reset-password')
    };
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-center text-secondary">Verify Account</h2>
                <p className="mt-2 text-center text-decripation">Enter the verification code sent to confirm your identity.</p>
                <div className="w-full pt-6 mx-auto lg:w-5/12">
                    <label className="block w-full text-base font-semibold text-center text-secondary">Enter Code *</label>
                    <div className="flex justify-center mt-3 space-x-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="w-12 h-12 text-xl text-center border rounded-md outline-primary shrink-0"
                            />
                        ))}
                    </div>
                    <button onClick={handleSubmit} className="block px-6 py-2 mx-auto mt-5 font-medium text-white rounded-md bg-primary">Verify Code</button>
                </div>
            </div>
        </>
    );
}