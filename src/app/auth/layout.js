export default function Layout({ children }) {
    return (
        <>
            <section className="py-10 md:py-16">
                <div className="container">
                    <div className="p-10 border rounded-md ">
                        {children}
                    </div>
                </div>
            </section>
        </>
    );
}