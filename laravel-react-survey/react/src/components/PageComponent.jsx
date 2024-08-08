
// eslint-disable-next-line react/prop-types
const PageComponent = ({ title, children, buttons = '' }) => {
    return (
        <>
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl flex justify-between items-center px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h1>
                    {buttons}
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    )
}

export default PageComponent