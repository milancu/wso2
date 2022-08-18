import {useAuthContext} from "@asgardeo/auth-react";
import {ReactElement} from "react";

// Encapsulate your components with the `AuthProvider`.
export const App = (): ReactElement => {

	const {state, signIn, signOut} = useAuthContext();

	return (
		<div className="App">
			{
				state.isAuthenticated
					? (
						<div>
							<ul>
								<li>{state.username}</li>
							</ul>

							<button onClick={() => signOut()}>Logout</button>
						</div>
					)
					: <button onClick={() => signIn()}>Login</button>
			}
		</div>
	)
}

export default App