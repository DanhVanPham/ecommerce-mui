import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
// ----------------------------------------------------------------------
function RHFSubmitButton({content, forForm, onSubmit, loading, ...props}){
	return <LoadingButton type="submit" 
			form={forForm}
			loading={loading}
			onSubmit={onSubmit}
			sx={{
				'& .MuiLoadingButton-loadingIndicatorCenter.MuiLoadingButton-loadingIndicator': {
					transform: "translate(0) !important",
					left: "10px !important",
				},
				...props?.sx
			}}
			{...props}>
			{content}
	</LoadingButton>
}

RHFSubmitButton.propTypes = {
	content: PropTypes.string,
	name: PropTypes.string,
	onSubmit: PropTypes.func
}

export default RHFSubmitButton; 
