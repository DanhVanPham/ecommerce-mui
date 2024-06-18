import { useForm } from 'react-hook-form';

const useNestedForm = (options) => {
  const { handleSubmit: internalSubmit, ...rest } = useForm(options);
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    internalSubmit(onSubmit)(e);
    e.stopPropagation();
  };

  return {
    handleSubmit,
    ...rest,
  };
};

export default useNestedForm;