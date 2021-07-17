import {useState, useEffect} from "react"

export default (key = "sticky", initialState = null) => {
	const [state, setState] = useState(() => {
		let storedState
		try{
			storedState = JSON.parse(localStorage.getItem(key))
		}
		catch(error){
			storedState = initialState
		}
		return storedState
	})
  
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])
  
	const clearState = () => localStorage.removeItem(key);
  
	return [state, setState, clearState];
}