import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useForm } from 'react-hook-form'

const LoginPage = () => {
    const { loginUser, isPending } = useLogin()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = (data) => {
        if (!data.email || !data.password) {
            return;
        }

        loginUser(data);
        reset()
    }
    return <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-lg font-semibold leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        {...register('email', {
                            required: 'Email field is required'
                        })}
                        type="email"

                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {errors?.email?.message && <span className="text-red-500 text-sm">{errors?.email.message}</span>}
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-lg font-semibold leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        {...register('password', {
                            required: 'Password field is required'
                        })}
                        type="password"
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {errors?.password?.message && <span className="text-red-500 text-sm">{errors?.password?.message}</span>}

            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {isPending ? 'Loading...' : 'Sign in'}
                </button>
            </div>
        </form>

        <p className="text-center text-md text-gray-500 mt-2">
            <Link to={'/signup'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                {"You don't have an account?"}
            </Link>
        </p>
    </div>
};

export default LoginPage;
