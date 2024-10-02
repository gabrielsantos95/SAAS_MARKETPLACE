import { type } from "os";
import { useState } from "react";
import LoginForm from '../components/loginForm';

export default function LoginPage() {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/auth/login', { 
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({email, password}), 
        });

        const data = await res.json();
    };

    return(
        <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
        >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Cadastre-se</h2>

        <div className="space-y-4">
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
            required
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            />

            <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
            Login
            </button>
        </div>

        <p className="text-center text-gray-500">
            Não tem uma conta?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
            Cadastre-se
            </a>
        </p>
        </form>
    );
}