import {useAuthContext} from "@asgardeo/auth-react";
import {ReactElement} from "react";

export const App = (): ReactElement => {

	const {state, signIn, signOut} = useAuthContext();

	return (
		<div className="App">
			{state.isAuthenticated
				?
				(
					<div>
						<div>{state.username}</div>
						<button onClick={() => signOut()}>Logout</button>
					</div>
				)
				:
				<button onClick={() => signIn()}>Login</button>}
		</div>
	)
}

export default App