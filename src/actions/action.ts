export const action = () => (dispatch: Function) => {
	dispatch({
		type: 'SIMPLE_ACTION',
		payload: 'result_of_simple_action',
	})
}